import prisma from "../common/prisma/init.prisma";

export const restaurantsService = {
  findARestaurants: async function (req) {
    const restaurants = await prisma.Restaurants.findMany();
    return restaurants;
  },
};
