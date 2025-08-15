# 🍔 Be_Food_App

**Link API Swagger UI:** http://localhost:3069/api-docs/

## 📚 API Documentation

### 🔹 Likes

| Method | Endpoint            | Mô tả                                 | Body (JSON) | Query Params                     |
| ------ | ------------------- | ------------------------------------- | ----------- | -------------------------------- |
| POST   | `/like`             | Like một nhà hàng                     |             | `userId`=1<br />`restaurantId`=5 |
| DELETE | `/unlike`           | Bỏ like nhà hàng                      |             | `userId`=1<br />`restaurantId`=5 |
| GET    | `/likes/restaurant` | Lấy danh sách lượt like theo nhà hàng |             | `restaurantId=5`                 |
| GET    | `/likes/user`       | Lấy danh sách nhà hàng user đã like   |             | `userId=1`                       |

## Giao diện API Likes

![API UI](./image/ReadMe/imageLike.png)

---

### 🔹 Reviews

| Method | Endpoint               | Mô tả                     | Body (JSON)                                              | Query Params     |
| ------ | ---------------------- | ------------------------- | -------------------------------------------------------- | ---------------- |
| POST   | `/reviews`             | Thêm đánh giá             | `{ "userId": 1, "restaurantId": 5, "content": "Ngon!" }` |                  |
| GET    | `/reviews/users`       | Lấy đánh giá của user     |                                                          | `userId=1`       |
| GET    | `/reviews/restaurants` | Lấy đánh giá của nhà hàng |                                                          | `restaurantId=5` |

## Giao diện API Reviews

![API UI](./image/ReadMe/imageReview.png)

---

### 🔹 Orders

| Method | Endpoint             | Mô tả                     | Body (JSON) | Query Params                                     |
| ------ | -------------------- | ------------------------- | ----------- | ------------------------------------------------ |
| POST   | `/orders`            | Tạo đơn hàng              |             | `userId`=1<br />`restaurantId`=5<br />`foodId=7` |
| GET    | `/orders/user`       | Lấy đơn hàng của user     |             | `userId=1`                                       |
| GET    | `/orders/restaurant` | Lấy đơn hàng của nhà hàng |             | `restaurantId=5`                                 |

## Giao diện API Orders

![API UI](./image/ReadMe/imageOrder.png)

---

### 🔹 Others

| Method | Endpoint       | Mô tả                    |
| ------ | -------------- | ------------------------ |
| GET    | `/users`       | Lấy danh sách người dùng |
| GET    | `/restaurants` | Lấy danh sách nhà hàng   |
| GET    | `/foods`       | Lấy danh sách món ăn     |

## Giao diện API All

![API UI](./image/ReadMe/image.png)

---

## ⚙️ Cài đặt

### 1. Clone dự án

```bash
git clone https://github.com/jetboydev/Be_Food_App.git
cd Be_Food_App
```

### 2. Cài đặt thư viện

npm install

### 3. Cấu hình biến môi trường

DATABASE_URL_PRISMA="prisma+postgres://localhost:51213/?api_key=eyJkYXRhYmFzZVVybCI6InBvc3RncmVzOi8vcG9zdGdyZXM6cG9zdGdyZXNAbG9jYWxob3N0OjUxMjE0L3RlbXBsYXRlMT9zc2xtb2RlPWRpc2FibGUmY29ubmVjdGlvbl9saW1pdD0xJmNvbm5lY3RfdGltZW91dD0wJm1heF9pZGxlX2Nvbm5lY3Rpb25fbGlmZXRpbWU9MCZwb29sX3RpbWVvdXQ9MCZzaW5nbGVfdXNlX2Nvbm5lY3Rpb25zPXRydWUmc29ja2V0X3RpbWVvdXQ9MCIsIm5hbWUiOiJkZWZhdWx0Iiwic2hhZG93RGF0YWJhc2VVcmwiOiJwb3N0Z3JlczovL3Bvc3RncmVzOnBvc3RncmVzQGxvY2FsaG9zdDo1MTIxNS90ZW1wbGF0ZTE_c3NsbW9kZT1kaXNhYmxlJmNvbm5lY3Rpb25fbGltaXQ9MSZjb25uZWN0X3RpbWVvdXQ9MCZtYXhfaWRsZV9jb25uZWN0aW9uX2xpZmV0aW1lPTAmcG9vbF90aW1lb3V0PTAmc2luZ2xlX3VzZV9jb25uZWN0aW9ucz10cnVlJnNvY2tldF90aW1lb3V0PTAifQ"
DATABASE_URL=mysql://root:123@localhost:3307/food_app

### 4. Khởi tạo Prisma

**Tạo cơ sở dự liệu và bảng bằng file đã cung cấp:** app-food.sql

- \_ npx prisma init : khởi tạo 1 lần
- \_ npx prisma db pull : kéo db vào code
- \_ npx prisma generate : tạo ra object model để chấm lấy table (sẽ chạy khi cần cập nhật)

### 5. Chạy dự án

npm run dev
