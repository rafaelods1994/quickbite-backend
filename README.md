# 🍔 QuickBite Backend

QuickBite is a food ordering API built with Node.js, TypeScript, Express, and Sequelize. It supports user management, dish catalog, order creation, and order item tracking — all documented with Swagger.

---

## 🚀 Features

- User registration and listing
- Dish CRUD operations
- Order creation and status updates
- Order item management
- Swagger API documentation

---

## 🧰 Tech Stack

- **Node.js** + **TypeScript**
- **Express** for routing
- **Sequelize** ORM with PostgreSQL
- **Swagger** for API docs
- **Docker** (optional for containerization)

---

## 📦 Installation

```bash
git clone https://github.com/your-username/quickbite-backend.git
cd quickbite-backend
npm install
```

## ⚙️ Configuration

- Create a .env file in the root directory:
```bash
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=quickbite
    PORT=3000
```

## 🗄️ Database Setup

- Run migrations to create tables:
```bash
    npx sequelize-cli db:migrate
```


## ▶️ Running the App

- Development (with ts-node):
    npx ts-node src/index.ts
- Production (after build):
```bash
    npm run build
    npm start
```

## 📚 API Documentation
- Swagger UI is available at:
    http://localhost:3000/api-docs

## 📁 Project Structure
migrations/
src/
├── controllers/
├── models/
├── routes/
├── config/
├── index.ts
├── swagger.ts

    


