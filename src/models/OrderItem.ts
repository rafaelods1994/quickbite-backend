import { Model, DataTypes, Sequelize } from 'sequelize';

export class OrderItem extends Model {
  public id!: number;
  public orderId!: number;
  public dishId!: number;
  public quantity!: number;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initModel(sequelize: Sequelize) {
    OrderItem.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        orderId: { type: DataTypes.INTEGER, allowNull: false },
        dishId: { type: DataTypes.INTEGER, allowNull: false },
        quantity: { type: DataTypes.INTEGER, allowNull: false },
      },
      {
        sequelize,
        modelName: 'OrderItem',
        tableName: 'order_items',
        timestamps: true,
      }
    );
  }

  static associate(models: any) {
    OrderItem.belongsTo(models.Order, { foreignKey: 'orderId' });
    OrderItem.belongsTo(models.Dish, { foreignKey: 'dishId' });
  }
}
