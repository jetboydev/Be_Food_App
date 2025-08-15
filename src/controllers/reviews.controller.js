import {
  responseError,
  responseSuccess,
} from "../common/helpers/response.helper";
import { reviewService } from "../services/reviews.service";

export const reviewsController = {
  addReview: async function (req, res, next) {
    try {
      const { userId, restaurantId, content } = req.body; // lấy tất cả từ body
      const result = await reviewService.addReview(
        userId,
        restaurantId,
        content
      );
      const response = responseSuccess(result, `Review added successfully`);
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

  getReviewsByRestaurant: async function (req, res, next) {
    try {
      const restaurantId = parseInt(req.query.resId);
      const result = await reviewService.getReviewsByRestaurant(restaurantId);
      const response = responseSuccess(
        result,
        `Get reviews for restaurant #${restaurantId} successfully`
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

  getReviewsByUser: async function (req, res, next) {
    try {
      const userId = parseInt(req.query.userId);
      const result = await reviewService.getReviewsByUser(userId);
      const response = responseSuccess(
        result,
        `Get reviews by user #${userId} successfully`
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
