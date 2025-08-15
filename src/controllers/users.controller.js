import { responseSuccess } from "../common/helpers/response.helper";
import { usersService } from "../services/users.service";

export const usersController = {
  findAllUsers: async function (req, res, next) {
    try {
      const result = await usersService.findAllUsers(req);
      const response = responseSuccess(result, `Get all users successfully`);
      res.status(response.statusCode).json(response);
    } catch (err) {
      next(err);
    }
  },
};
