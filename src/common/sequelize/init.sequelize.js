import { DATABASE_URL } from "../constant/app.constant";
import { Sequelize } from "sequelize";

const sequelize = new Sequelize(DATABASE_URL, { logging: false });

try {
  await sequelize.authenticate();
  console.log("SEQUELIZE: \t Connection successfully.");
} catch (error) {
  console.error("SEQUELIZE: \t Connection error: ", error);
}

export default sequelize;
