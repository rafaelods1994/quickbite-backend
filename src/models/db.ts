import sequelize from '../config/database';
import { User } from './User';
import { Dish } from './Dish';
import { Order } from './Order';
import { OrderItem } from './OrderItem';

User.initModel(sequelize);
Dish.initModel(sequelize);
Order.initModel(sequelize);
OrderItem.initModel(sequelize);

const models = { User, Dish, Order, OrderItem };

Object.values(models).forEach(model => {
  if (typeof model.associate === 'function') {
    model.associate(models);
  }
});

export { sequelize };
export default models;
