import { statusCodes } from "../common/helpers/status-code.helper";
import prisma from "../common/prisma/init.prisma";

export const likeService = {
  likeRestaurant: async function (userId, restaurantId) {
    if (!userId || !restaurantId) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "userId và restaurantId là bắt buộc",
      };
    }

    // Kiểm tra user có tồn tại
    const user = await prisma.Users.findUnique({ where: { id: userId } });
    if (!user) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `User với id ${userId} không tồn tại`,
      };
    }

    // Kiểm tra restaurant có tồn tại
    const restaurant = await prisma.Restaurants.findUnique({
      where: { id: restaurantId },
    });
    if (!restaurant) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `Restaurant với id ${restaurantId} không tồn tại`,
      };
    }

    // Kiểm tra xem user đã like restaurant chưa
    const existingLike = await prisma.Likes.findUnique({
      where: { userId_restaurantId: { userId, restaurantId } },
    });
    if (existingLike) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: `User ${userId} đã like Restaurant ${restaurantId}`,
      };
    }

    // Thực hiện tạo like
    const result = await prisma.Likes.create({
      data: { userId, restaurantId },
    });

    return result;
  },

  unlikeRestaurant: async function (userId, restaurantId) {
    if (!userId || !restaurantId) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "userId và restaurantId là bắt buộc",
      };
    }

    // Kiểm tra user có tồn tại
    const user = await prisma.Users.findUnique({ where: { id: userId } });
    if (!user) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `User với id ${userId} không tồn tại`,
      };
    }

    // Kiểm tra restaurant có tồn tại
    const restaurant = await prisma.Restaurants.findUnique({
      where: { id: restaurantId },
    });
    if (!restaurant) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `Restaurant với id ${restaurantId} không tồn tại`,
      };
    }

    // Thực hiện xóa like
    const result = await prisma.likes.deleteMany({
      where: { userId, restaurantId },
    });

    if (result.count === 0) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `Không tìm thấy like của User: ${userId} đối với Restaurant: ${restaurantId}`,
      };
    }

    return result;
  },

  getLikesByRestaurant: async function (restaurantId) {
    // Kiểm tra input
    if (!restaurantId) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "restaurantId là bắt buộc",
      };
    }
    if (typeof restaurantId !== "number") {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "restaurantId phải là số",
      };
    }

    // Kiểm tra restaurant có tồn tại
    const restaurant = await prisma.Restaurants.findUnique({
      where: { id: restaurantId },
    });
    if (!restaurant) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `Restaurant với id ${restaurantId} không tồn tại`,
      };
    }

    // Lấy danh sách like
    const likes = await prisma.Likes.findMany({
      where: { restaurantId },
      include: { Users: true }, // bao gồm thông tin user
    });

    // Kiểm tra nếu chưa có like
    if (!likes || likes.length === 0) {
      return {
        message: `Restaurant: ${restaurantId} chưa có ai like`,
        data: [],
      };
    }

    // Trả dữ liệu đầy đủ
    return likes;
  },

  getLikesByUser: async function (userId) {
    // Kiểm tra input
    if (!userId) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "userId là bắt buộc",
      };
    }
    if (typeof userId !== "number") {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "userId phải là số",
      };
    }

    // Kiểm tra user có tồn tại
    const user = await prisma.Users.findUnique({ where: { id: userId } });
    if (!user) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `User với id ${userId} không tồn tại`,
      };
    }

    // Lấy danh sách like
    const likes = await prisma.Likes.findMany({
      where: { userId },
      include: { Restaurants: true }, // bao gồm thông tin restaurant
    });

    // Kiểm tra nếu chưa có like
    if (!likes || likes.length === 0) {
      return { message: `User: ${userId} chưa like restaurant nào`, data: [] };
    }

    // Trả dữ liệu đầy đủ
    return likes;
  },
};
