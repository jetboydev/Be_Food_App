import { statusCodes } from "../common/helpers/status-code.helper";
import prisma from "../common/prisma/init.prisma";

export const reviewService = {
  addReview: async function (userId, restaurantId, content) {
    userId = Number(userId);
    restaurantId = Number(restaurantId);

    // Kiểm tra đầu vào
    if (!userId || !restaurantId || !content?.trim()) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "userId, restaurantId và content là bắt buộc",
      };
    }

    // Kiểm tra user tồn tại
    const user = await prisma.Users.findUnique({ where: { id: userId } });
    if (!user) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `User với id ${userId} không tồn tại`,
      };
    }

    // Kiểm tra restaurant tồn tại
    const restaurant = await prisma.Restaurants.findUnique({
      where: { id: restaurantId },
    });
    if (!restaurant) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `Restaurant với id ${restaurantId} không tồn tại`,
      };
    }

    // Tạo review
    return prisma.Reviews.create({
      data: { userId, restaurantId, content },
    });
  },

  getReviewsByRestaurant: async function (restaurantId) {
    restaurantId = Number(restaurantId);

    if (!restaurantId) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "restaurantId là bắt buộc",
      };
    }

    // Kiểm tra restaurant tồn tại
    const restaurant = await prisma.Restaurants.findUnique({
      where: { id: restaurantId },
    });
    if (!restaurant) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `Restaurant với id ${restaurantId} không tồn tại`,
      };
    }

    return prisma.Reviews.findMany({
      where: { restaurantId },
      include: { Users: true },
    });
  },

  getReviewsByUser: async function (userId) {
    userId = Number(userId);

    if (!userId) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "userId là bắt buộc",
      };
    }

    // Kiểm tra user tồn tại
    const user = await prisma.Users.findUnique({ where: { id: userId } });
    if (!user) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `User với id ${userId} không tồn tại`,
      };
    }

    return prisma.Reviews.findMany({
      where: { userId },
      include: { Restaurants: true },
    });
  },
};
