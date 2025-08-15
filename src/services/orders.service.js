import { statusCodes } from "../common/helpers/status-code.helper";
import prisma from "../common/prisma/init.prisma";

export const orderService = {
  createOrder: async function (userId, restaurantId, foodId) {
    userId = Number(userId);
    restaurantId = Number(restaurantId);
    foodId = Number(foodId);

    if (!userId || !restaurantId || !foodId) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "userId, restaurantId và foodId là bắt buộc",
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

    // Kiểm tra food có tồn tại
    const food = await prisma.Foods.findUnique({ where: { id: foodId } });
    if (!food) {
      throw {
        statusCode: statusCodes.NOT_FOUND,
        message: `Food với id ${foodId} không tồn tại`,
      };
    }

    // Tạo đơn hàng
    const order = await prisma.Orders.create({
      data: { userId, restaurantId, foodId },
    });

    return order;
  },

  getOrdersByUser: async function (userId) {
    userId = Number(userId);

    if (!userId) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "userId là bắt buộc",
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

    // Lấy danh sách đơn hàng kèm thông tin nhà hàng và món ăn
    const orders = await prisma.Orders.findMany({
      where: { userId },
      include: {
        Restaurants: true,
        Foods: true,
      },
    });

    return orders;
  },

  getOrdersByRestaurant: async function (restaurantId) {
    restaurantId = Number(restaurantId);

    if (!restaurantId) {
      throw {
        statusCode: statusCodes.BAD_REQUEST,
        message: "restaurantId là bắt buộc",
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

    // Lấy danh sách đơn hàng kèm user và món ăn
    const orders = await prisma.Orders.findMany({
      where: { restaurantId },
      include: {
        Users: true,
        Foods: true,
      },
    });

    return orders;
  },
};
