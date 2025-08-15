import prisma from "../common/prisma/init.prisma";

export const foodsService = {
  findAllFoods: async function () {
    const foods = await prisma.Foods.findMany();

    return foods;
  },
};
