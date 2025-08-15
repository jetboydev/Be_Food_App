import { responseSuccess } from "../common/helpers/response.helper";
import { restaurantsService } from "../services/restaurants.service";

export const restaurantsController = {
  findAllRestaurants: async function (req, res, next) {
    try {
      const result = await restaurantsService.findARestaurants(req);
      const response = responseSuccess(
        result,
        `Get all restaurants successfully`
      );
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
