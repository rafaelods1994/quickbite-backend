# QuickBite Backend

Backend service for the QuickBite food ordering platform, built with Node.js, TypeScript, Express, and Sequelize.

## 🚀 Getting Started

### Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or later recommended)
- npm (comes with Node.js)
- PostgreSQL (local or Docker)

### 📦 Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/quickbite-backend.git
    cd quickbite-backend

2. Install dependencies
    npm install

3. Create a .env file:
    DB_HOST=localhost
    DB_PORT=5432
    DB_USER=your_db_user
    DB_PASSWORD=your_db_password
    DB_NAME=quickbite

4. Run the development server:
    npm run dev

### Project Structure

quickbite-backend/
├── src/
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── config/
│   └── index.ts
├── .env
├── tsconfig.json
├── package.json
└── README.md

