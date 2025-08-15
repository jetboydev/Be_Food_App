import { responseSuccess } from "../common/helpers/response.helper";
import { foodsService } from "../services/foods.service";

export const foodsController = {
  findAllFoods: async function (req, res, next) {
    try {
      const result = await foodsService.findAllFoods(req);
      const response = responseSuccess(result, `Get all foods successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
