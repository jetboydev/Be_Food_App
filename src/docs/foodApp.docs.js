/**
 * @swagger
 * tags:
 *   - name: Likes
 *     description: API quản lý lượt thích nhà hàng
 *   - name: Reviews
 *     description: API quản lý đánh giá
 *   - name: Orders
 *     description: API quản lý đơn hàng
 *   - name: Users
 *     description: API người dùng
 *   - name: Restaurants
 *     description: API nhà hàng
 *   - name: Foods
 *     description: API món ăn
 */

/**
 * @swagger
 * /like:
 *   post:
 *     summary: Like một nhà hàng
 *     tags: [Likes]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của người dùng
 *       - in: query
 *         name: resId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của nhà hàng
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /unlike:
 *   delete:
 *     summary: Bỏ like một nhà hàng
 *     tags: [Likes]
 *     parameters:
 *       - in: query
 *         name: restaurantId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /likes/restaurant:
 *   get:
 *     summary: Lấy danh sách lượt like theo nhà hàng
 *     tags: [Likes]
 *     parameters:
 *       - in: query
 *         name: resId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /likes/user:
 *   get:
 *     summary: Lấy danh sách lượt like theo người dùng
 *     tags: [Likes]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /reviews:
 *   post:
 *     summary: Thêm đánh giá
 *     tags: [Reviews]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               userId:
 *                 type: integer
 *               restaurantId:
 *                 type: integer
 *               content:
 *                 type: string
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /reviews/users:
 *   get:
 *     summary: Lấy đánh giá theo người dùng
 *     tags: [Reviews]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /reviews/restaurants:
 *   get:
 *     summary: Lấy đánh giá theo nhà hàng
 *     tags: [Reviews]
 *     parameters:
 *       - in: query
 *         name: resId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /orders:
 *   post:
 *     summary: Tạo đơn hàng mới
 *     tags: [Orders]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của người dùng
 *       - in: query
 *         name: resId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của nhà hàng
 *       - in: query
 *         name: foodId
 *         required: true
 *         schema:
 *           type: integer
 *         description: ID của món ăn
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /orders/user:
 *   get:
 *     summary: Lấy đơn hàng theo người dùng
 *     tags: [Orders]
 *     parameters:
 *       - in: query
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /orders/restaurant:
 *   get:
 *     summary: Lấy đơn hàng theo nhà hàng
 *     tags: [Orders]
 *     parameters:
 *       - in: query
 *         name: resId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lấy danh sách người dùng
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /restaurants:
 *   get:
 *     summary: Lấy danh sách nhà hàng
 *     tags: [Restaurants]
 *     responses:
 *       200:
 *         description: Thành công
 */

/**
 * @swagger
 * /foods:
 *   get:
 *     summary: Lấy danh sách món ăn
 *     tags: [Foods]
 *     responses:
 *       200:
 *         description: Thành công
 */
