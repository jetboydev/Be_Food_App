-- Tạo database --
CREATE DATABASE IF NOT EXISTS food_app;
USE food_app;

-- Bảng Users --
CREATE TABLE Users (
  id INT PRIMARY KEY AUTO_INCREMENT,
  fullName VARCHAR(255)
);

-- Bảng Restaurants --
CREATE TABLE Restaurants (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255)
);

-- Bảng Food --
CREATE TABLE Foods (
  id INT PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(255) NOT NULL
);

-- Bảng Orders --
CREATE TABLE Orders (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  restaurantId INT,
  FOREIGN KEY (userId) REFERENCES Users(id),
  FOREIGN KEY (restaurantId) REFERENCES Restaurants(id)
);

-- Update Orders --
ALTER TABLE Orders
ADD COLUMN foodId INT,
ADD FOREIGN KEY (foodId) REFERENCES Foods(id);

-- Bảng Likes --
CREATE TABLE Likes (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  restaurantId INT,
  FOREIGN KEY (userId) REFERENCES Users(id),
  FOREIGN KEY (restaurantId) REFERENCES Restaurants(id)
);

-- Bảng Reviews --
CREATE TABLE Reviews (
  id INT PRIMARY KEY AUTO_INCREMENT,
  userId INT,
  restaurantId INT,
  content TEXT,
  FOREIGN KEY (userId) REFERENCES Users(id),
  FOREIGN KEY (restaurantId) REFERENCES Restaurants(id)
);


-- Thêm data mẫu vào bài tập --
-- Users
INSERT INTO Users (fullName) VALUES 
				  ("Nguyễn Minh Huy"), 
				  ("Nguyễn Minh Hoàng"), 
				  ("Nguyễn Minh Thắng"), 
				  ("Hồ Nguyễn Anh Thư"), 
				  ("Đặng Tấn Phát"), 
				  ("Nguyễn Ngọc Huỳnh");

-- Restaurants
INSERT INTO Restaurants (name) VALUES 
						("Nhà hàng Korea"), 
						("Nhà hàng Japan"), 
						("Nhà hàng China"),
						("Nhà hàng France"),
						("Nhà hàng Italian");

-- Foods
INSERT INTO Foods (name) VALUES
				  ("Phở Bò Hà Nội"),
				  ("Bánh Mì Thịt Nướng"),
				  ("Gà Rán KFC"),
				  ("Pizza Hải Sản"),
				  ("Sushi Cá Hồi"),
				  ("Lẩu Thái Chua Cay"),
                  ("Bún Chả Hà Nội"),
                  ("Tôm Hùm Nướng Bơ Tỏi"),
                  ("Bánh Xèo Miền Tây"),
                  ("Trà Sữa Trân Châu Đường Đen");


-- Likes
INSERT INTO Likes (userId, restaurantId) VALUES 
				  (1, 1), 
				  (1, 2), 
				  (2, 2), 
				  (3, 1), 
				  (4, 1), 
				  (1, 3), 
				  (2, 1), 
				  (5, 1);

-- Orders
INSERT INTO Orders (userId, restaurantId) VALUES 
				   (1, 1), 
				   (1, 2), 
				   (2, 2), 
				   (3, 1), 
				   (1, 3);

-- Reviews
INSERT INTO Reviews (userId, restaurantId, content) VALUES 
					(1, 1, "Ngon lắm"), 
					(2, 2, "Tạm ổn"), 
					(3, 1, "Không ngon");

-- Câu 1: Tìm 5 người đã like nhà hàng nhiều nhất --
SELECT Users.fullName, COUNT(Likes.id) AS total_likes
FROM Likes
JOIN Users ON Likes.userId = Users.id
GROUP BY Likes.userId
ORDER BY total_likes DESC
LIMIT 5;

-- Câu 2: Tìm 2 nhà hàng có lượt like nhiều nhất --
SELECT Restaurants.name, COUNT(Likes.id) AS total_likes
FROM Likes
JOIN Restaurants ON Likes.restaurantId = Restaurants.id
GROUP BY Likes.restaurantId
ORDER BY total_likes DESC
LIMIT 2;

-- Câu 3: Tìm người đã đặt hàng nhiều nhất --
SELECT Users.fullName, COUNT(Orders.id) AS total_orders
FROM Orders
JOIN Users ON Orders.userId = Users.id
GROUP BY Orders.userId
ORDER BY total_orders DESC
LIMIT 1;

-- Câu 4: Tìm người dùng không hoạt động trong hệ thống --
SELECT *
FROM Users
LEFT JOIN Orders ON Users.id = Orders.userId
LEFT JOIN Likes ON Users.id = Likes.userId
LEFT JOIN Reviews ON Users.id = Reviews.userId
WHERE Orders.id IS NULL AND Likes.id IS NULL AND Reviews.id IS NULL;