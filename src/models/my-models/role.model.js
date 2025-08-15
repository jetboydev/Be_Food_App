import sequelize from "../../common/sequelize/init.sequelize";
import { DataTypes } from "sequelize";
// Code First: Code để tạo ra model và áp vào database
// Code => database
const Role = sequelize.define(
  "Role",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING(255),
    },
    description: {
      type: DataTypes.STRING(255),
    },
    isActive: {
      type: DataTypes.BOOLEAN,
      defaultValue: 1,
    },
    deletedBy: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0,
    },
    isDeleted: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: 0,
    },
    deletedAt: {
      type: "TIMESTAMP",
      allowNull: true,
      defaultValue: null,
    },
    createdAt: {
      type: "TIMESTAMP",
      allowNull: false,
      defaultValue: sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      type: "TIMESTAMP",
      allowNull: false,
      defaultValue: sequelize.literal(
        "CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP"
      ),
    },
  },
  {
    tableName: "Roles", //Tên table trong database
    timestamps: false, // Khai báo không tạo field createdAt, updatedAt. True thì sequelize quản lý, false thì người dùng phải quản lý
  }
);
Role.sync({ alter: false });

export default Role;

// DATABASE FIRST: đi tạo database trước rồi mới kéo vào code
// database => code | dùng thư viện sequelize-auto để kéo vào code
//sequelize-auto -h <host> -d <database> -u <user> -x [password] -p [port]  --dialect [dialect] -c [/path/to/config] -o [/path/to/models] -t [tableName]
// <host>: localhost | 127.0.0.1
// <database>: db_cyber_community_code
// <user>: root
// <password>: 123
// <dialect>: mysql
// <port>: 3307 port bên tay trái doccer
// dialect: mysql | mssql | postgres | sqlite | mariadb
// -c [/path/to/config]: đường dẫn file config, ko sài nên bỏ
// -o [/path/to/models]: đường dẫn mong muốn chứa model sau khi kéo vào
// -t [tableName]: khi chỉ định cụ thể 1 table muốn kéo vào, nếu muốn kéo hết thì bỏ qua tham số này
// -l esm: để quy định syntax cú pháp theo phiên bản es module (import ... from ...)
// -a: thay đổi option của model khi chạy lệnh sequelize-auto

//sequelize-auto -h localhost -d db_cyber_community_code -u root -x 123 -p 3307 --dialect mysql -o src\models\sequelize-auto -l esm -a src\models\additional.json
