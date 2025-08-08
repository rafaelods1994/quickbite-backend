import express from 'express';
import routes from './routes';
import { sequelize } from './models/db';
import { setupSwagger } from './swagger';

const app = express();
app.use(express.json());

// Swagger docs
setupSwagger(app);

// API routes
app.use('/api', routes);

const PORT = process.env.PORT || 3000;

async function start() {
  await sequelize.authenticate();
  await sequelize.sync({ alter: true });

  app.listen(PORT, () => {
    console.log(`🚀 Server running on port ${PORT}`);
    console.log(`📚 Swagger docs available at http://localhost:${PORT}/api-docs`);
  });
}

start();
