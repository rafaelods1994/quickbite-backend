import express from 'express';
import User from '../models/user';
import sequelize from '../config/database';

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Basic test route
app.get('/', (_, res) => {
  res.send('QuickBite backend is running 🚀');
});

// User creation route
app.post('/users', async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const user = await User.create({ name, email, password });
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create user', details: err });
  }
});

sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
});
