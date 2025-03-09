# Spirit11

## 🏏 Overview
The **Spirit11 Admin Panel** is a web-based platform that allows administrators to manage players, track statistics, and configure the game logic for the fantasy cricket system. This panel provides an intuitive user interface for efficient team and tournament management.

## 🚀 Tech Stack
- **Frontend**: Next.js, Tailwind CSS
- **Backend**: Node.js, Express.js
- **Database**: MySQL
- **Authentication**: JWT (JSON Web Token)
- **API Client**: Axios
- **Styling**: Tailwind CSS

## 📂 Folder Structure
```
spirit11-admin/
│-- frontend/              # Next.js-based Admin Panel UI
│   ├── components/        # Reusable UI components
│   ├── pages/             # Next.js pages (Dashboard, Players, Tournaments, etc.)
│   ├── services/          # API service handlers
│   ├── styles/            # Global styles
│   ├── public/            # Static assets
│   ├── next.config.js     # Next.js configuration file
│   ├── tailwind.config.js # TailwindCSS configuration
│   ├── package.json       # Dependencies and scripts
│   └── tsconfig.json      # TypeScript configuration
│
│-- backend/               # Node.js API Server
│   ├── controllers/       # Business logic handlers
│   ├── routes/            # Express route definitions
│   ├── models/            # Database models
│   ├── middlewares/       # Authentication and validation
│   ├── config/            # Environment configurations
│   ├── db/                # MySQL database connection
│   ├── package.json       # Backend dependencies and scripts
│   ├── server.js          # Main server file
│   └── .env               # Environment variables (API keys, DB credentials, etc.)
```

## 🎯 Features
- **Admin Dashboard**: Overview of system stats.
- **Player Management**: Add, update, and remove players.
- **Team & Tournament Management**: Manage teams and tournament schedules.
- **User Authentication**: Secure login with JWT.
- **Responsive UI**: Optimized for desktop and mobile.

## 🛠️ Setup & Installation
### Prerequisites
- Node.js (v18+)
- MySQL Database
- npm or yarn

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/yourusername/spirit11-admin.git
cd spirit11-admin
```

### 2️⃣ Setup the Backend
```sh
cd backend
npm install
```

Create a **.env** file in the `backend/` directory:
```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=yourpassword
DB_NAME=spirit11_db
JWT_SECRET=your_secret_key
```
Run the backend:
```sh
npm start
```

### 3️⃣ Setup the Frontend
```sh
cd ../frontend
npm install
```
Create a **.env.local** file in `frontend/`:
```
NEXT_PUBLIC_API_BASE_URL=http://localhost:5000/api
```
Run the frontend:
```sh
npm run dev
```

## 📌 API Endpoints (Backend)
| Method | Endpoint         | Description |
|--------|-----------------|-------------|
| GET    | /api/players    | Get all players |
| POST   | /api/players    | Add a new player |
| PUT    | /api/players/:id | Update player details |
| DELETE | /api/players/:id | Delete a player |





<<<<<<< HEAD
# spiritX
=======
# MyApp

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.2.0.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
>>>>>>> 1b03b8d (sample comit)
