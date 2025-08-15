import { tokenService } from "../../services/token.services";
import { UnauthorizedException } from "../helpers/exception.helper";
import prisma from "../prisma/init.prisma";
export const protect = async (req, res, next) => {
  const authorization = req.headers.authorization;
  if (!authorization) throw new UnauthorizedException("Not Authorization");

  const [type, accessToken] = authorization?.split(" ");
  if (type !== "Bearer") throw new UnauthorizedException("Type is not Bearer");
  if (!accessToken) throw new UnauthorizedException("Not AccessToken");
  const { userId } = tokenService.verifyAccessToken(accessToken);

  const user = await prisma.users.findUnique({
    where: {
      id: userId,
    },
  });
  if (!user) throw new UnauthorizedException("User not found");
  req.user = user;

  console.log("middleware: ", {
    authorization,
    type,
    accessToken,
    userId,
    user,
  });
  next();
};
