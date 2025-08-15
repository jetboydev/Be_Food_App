import { likeService } from "../services/likes.service";
import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper";
export const likesController = {
  likeRestaurant: async (req, res, next) => {
    try {
      const userId = parseInt(req.query.userId);
      const restaurantId = parseInt(req.query.resId);
      const result = await likeService.likeRestaurant(userId, restaurantId);
      const response = responseSuccess(
        result,
        `User: ${userId} Liked Restaurant: ${restaurantId} successfully`
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

  unlikeRestaurant: async (req, res, next) => {
    try {
      const userId = parseInt(req.query.userId);
      const restaurantId = parseInt(req.query.resId);

      const result = await likeService.unlikeRestaurant(userId, restaurantId);
      res
        .status(200)
        .json(
          responseSuccess(
            result,
            `User: ${userId} đã unlike Restaurant: ${restaurantId} thành công`
          )
        );
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

  getLikesByRestaurant: async (req, res, next) => {
    try {
      const restaurantId = parseInt(req.query.resId);
      const result = await likeService.getLikesByRestaurant(restaurantId);
      const response = responseSuccess(
        result,
        `Get likes for restaurant #${restaurantId} successfully`
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

  getLikesByUser: async (req, res, next) => {
    try {
      const userId = parseInt(req.query.userId);
      const result = await likeService.getLikesByUser(userId);
      const response = responseSuccess(
        result,
        `Get likes by user #${userId} successfully`
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
