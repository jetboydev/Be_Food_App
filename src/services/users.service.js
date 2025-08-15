import prisma from "../common/prisma/init.prisma";

export const usersService = {
  findAllUsers: async function (req) {
    const users = await prisma.Users.findMany();
    return users;
  },
};
