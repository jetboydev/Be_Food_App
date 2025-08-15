import express from "express";
import { likesController } from "../controllers/likes.controller.js";
import { reviewsController } from "../controllers/reviews.controller.js";
import { ordersController } from "../controllers/orders.controller.js";
import { usersController } from "../controllers/users.controller.js";
import { foodsController } from "../controllers/foods.controller.js";
import { restaurantsController } from "../controllers/restaurants.controller.js";
import "../docs/foodApp.docs.js";
const routerAPI = express.Router();

// ---------------- Likes Routes ----------------
// Like a restaurant
routerAPI.post("/like", likesController.likeRestaurant);
routerAPI.delete("/unlike", likesController.unlikeRestaurant);
routerAPI.get("/likes/restaurant", likesController.getLikesByRestaurant);
routerAPI.get("/likes/user", likesController.getLikesByUser);

// ---------------- Reviews Routes ----------------
routerAPI.post("/reviews", reviewsController.addReview);
routerAPI.get("/reviews/users", reviewsController.getReviewsByUser);
routerAPI.get("/reviews/restaurants", reviewsController.getReviewsByRestaurant);

// ---------------- Orders Routes ----------------
routerAPI.post("/orders", ordersController.createOrder);
routerAPI.get("/orders/user", ordersController.getOrdersByUser);
routerAPI.get("/orders/restaurant", ordersController.getOrdersByRestaurant);

// ---------------- Get All Users, Restaurants, Foods ----------------
routerAPI.get("/users", usersController.findAllUsers);
routerAPI.get("/restaurants", restaurantsController.findAllRestaurants);
routerAPI.get("/foods", foodsController.findAllFoods);

export default routerAPI;
