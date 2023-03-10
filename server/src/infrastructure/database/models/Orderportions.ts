import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { IOrderportions } from "../../interfaces/database/IOrderportions";
import { SequelizeOrders } from "./Orders";

export class SequelizeOrderportions extends Model<IOrderportions> {
  declare id: number;
  declare nDup: string;
  declare dVenc: string;
  declare vDup: string;
  declare availableToMarket: number;
  declare orderId: number;
}

SequelizeOrderportions.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  nDup: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  dVenc: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  vDup: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  availableToMarket: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 1,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  sequelize,
  timestamps: true,
  tableName: 'orderportions'
})

SequelizeOrderportions.belongsTo(SequelizeOrders, { foreignKey: 'orderId', as: 'order' });