import initModels from "./sequelize-auto/init-models";
import sequelize from "../common/sequelize/init.sequelize";

const models = initModels(sequelize);

export default models;
