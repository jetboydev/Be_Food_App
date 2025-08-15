import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper";
import { orderService } from "../services/orders.service";

export const ordersController = {
  createOrder: async function (req, res, next) {
    try {
      const userId = parseInt(req.query.userId);
      const restaurantId = parseInt(req.query.resId);
      const foodId = parseInt(req.query.foodId);

      const result = await orderService.createOrder(
        userId,
        restaurantId,
        foodId
      );

      const response = responseSuccess(
        result,
        `User: ${userId} ordered Food: ${foodId} from Restaurant: ${restaurantId} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      res
        .status(err.statusCode || 500)
        .json(
          responseError(
            err.message || "Internal Server Error",
            err.statusCode || 500,
            err.stack || null
          )
        );
    }
  },

  getOrdersByUser: async function (req, res, next) {
    try {
      const userId = parseInt(req.query.userId);
      const result = await orderService.getOrdersByUser(userId);
      const response = responseSuccess(
        result,
        `Get orders for user #${userId} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      res
        .status(err.statusCode || 500)
        .json(
          responseError(
            err.message || "Internal Server Error",
            err.statusCode || 500,
            err.stack || null
          )
        );
    }
  },

  getOrdersByRestaurant: async function (req, res, next) {
    try {
      const restaurantId = parseInt(req.query.resId);
      const result = await orderService.getOrdersByRestaurant(restaurantId);
      const response = responseSuccess(
        result,
        `Get orders for restaurant #${restaurantId} successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      res
        .status(err.statusCode || 500)
        .json(
          responseError(
            err.message || "Internal Server Error",
            err.statusCode || 500,
            err.stack || null
          )
        );
    }
  },
};
