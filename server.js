// index.js
import express from "express";
import cors from "cors";
import rootRouter from "./src/routers/root.router.js";
import { appError } from "./src/common/app-error/app-error.error.js";
import { swaggerUi, swaggerSpec } from "./src/swagger.js";

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: ["http://localhost:3000"],
  })
);

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// API routes
app.use("/api", rootRouter);

// Error handler
app.use(appError);

const port = 3069;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
  console.log(`Swagger docs at http://localhost:${port}/api-docs`);
});
