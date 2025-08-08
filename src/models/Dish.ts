import { Model, DataTypes, Sequelize } from 'sequelize';

export class Dish extends Model {
  public id!: number;
  public name!: string;
  public description!: string;
  public price!: number;
  public available!: boolean;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;

  static initModel(sequelize: Sequelize) {
    Dish.init(
      {
        id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
        name: { type: DataTypes.STRING, allowNull: false },
        description: { type: DataTypes.TEXT },
        price: { type: DataTypes.DECIMAL(10, 2), allowNull: false },
        available: { type: DataTypes.BOOLEAN, defaultValue: true },
      },
      {
        sequelize,
        modelName: 'Dish',
        tableName: 'dishes',
        timestamps: true,
      }
    );
  }

  static associate(models: any) {
    Dish.hasMany(models.OrderItem, { foreignKey: 'dishId' });
  }
}
