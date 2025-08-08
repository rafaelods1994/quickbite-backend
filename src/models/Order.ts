import { Model, DataTypes, Sequelize } from 'sequelize';

export class Order extends Model {
  public id!: number;
  public userId!: number;
  public status!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initModel(sequelize: Sequelize) {
    Order.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        userId: { type: DataTypes.INTEGER, allowNull: false },
        status: { type: DataTypes.STRING, allowNull: false },
      },
      {
        sequelize,
        modelName: 'Order',
        tableName: 'orders',
        timestamps: true,
      }
    );
  }

  static associate(models: any) {
    Order.belongsTo(models.User, { foreignKey: 'userId' });
    Order.hasMany(models.OrderItem, { foreignKey: 'orderId' });
  }
}
