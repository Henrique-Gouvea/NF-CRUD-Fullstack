import { DataTypes, Model } from "sequelize";
import sequelize from "./index";
import { IOffers } from "../../interfaces/database/IOffers";
import { SequelizeSponsors } from "./Sponsors";
import { SequelizeOrders } from "./Orders";

export class SequelizeOffers extends Model<IOffers> {
  declare id: number;
  declare tax: string;
  declare tariff: string;
  declare adValorem: string;
  declare float: string;
  declare iof: string;
  declare expiresIn: Date;
  declare paymentStatusSponsor: number;
  declare paymentStatusProvider: number;
  declare orderId: number;
  declare sponsorId: number;
}

SequelizeOffers.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    allowNull: false,
    autoIncrement: true,
  },
  tax: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  tariff: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  adValorem: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  float: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  iof: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  expiresIn: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  paymentStatusSponsor: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 0,
  },
  paymentStatusProvider: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
    defaultValue: 0,
  },
  orderId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
  sponsorId: {
    type: DataTypes.INTEGER,
    allowNull: true,
  },
}, {
  sequelize,
  timestamps: true,
  tableName: 'offers'
})

SequelizeOffers.belongsTo(SequelizeSponsors, { foreignKey: 'sponsorId', as: 'sponsor' });
SequelizeOffers.belongsTo(SequelizeOrders, { foreignKey: 'orderId', as: 'order' });