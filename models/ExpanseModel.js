import { Sequelize } from "sequelize";
import db from "../config/Database.js";

const { DataTypes } = Sequelize;

const Expanse = db.define(
  "users",
  {
    title: DataTypes.STRING,
    amount: DataTypes.FLOAT,
    date: DataTypes.DATE,
  },
  {
    freezeTableName: true,
  }
);

export default Expanse;

(async () => {
  await db.sync();
})();
