# Lost & Find Go

A full-stack Lost & Found ticket tracking application built with **Express + TypeScript + Prisma** (API) and **React + Vite + Tailwind CSS** (Web).

---

## Prerequisites

Make sure you have the following installed before you begin:

| Tool | Version |
|------|---------|
| [Node.js](https://nodejs.org/) | ≥ 18 |
| [npm](https://www.npmjs.com/) | ≥ 9 |
| [Docker & Docker Compose](https://docs.docker.com/get-docker/) | any recent version |
| [PostgreSQL](https://www.postgresql.org/) | ≥ 14 (only needed for manual setup) |

---

## Quick Start with Docker Compose (recommended)

This is the easiest way to spin up the entire stack (database + API + web) in one command.

```bash
# 1. Clone the repository and enter its directory
git clone https://github.com/pragyakuumarimishra/Lost-Find-Go.git
cd Lost-Find-Go

# 2. Start all services
docker compose up --build
```

| Service | URL |
|---------|-----|
| Web (React) | <http://localhost:5173> |
| API | <http://localhost:4000/api/v1> |
| PostgreSQL | `localhost:5432` |

To stop all services:

```bash
docker compose down
```

To also remove the database volume:

```bash
docker compose down -v
```

---

## Manual Local Setup

Use this approach if you prefer to run the services directly on your machine without Docker.

### 1. Start PostgreSQL

Make sure a PostgreSQL instance is running and accessible. You can use Docker just for the database:

```bash
docker compose up -d db
```

### 2. Set Up the API

```bash
cd api

# Install dependencies
npm install

# Copy the example environment file and edit values as needed
cp .env.example .env

# Generate the Prisma client
npm run prisma:generate

# Run database migrations
npm run prisma:migrate

# Start the development server (auto-reloads on changes)
npm run dev
```

The API will be available at <http://localhost:4000>.

### 3. Set Up the Web App

Open a **new terminal** in the project root:

```bash
cd web

# Install dependencies
npm install

# Start the Vite development server
npm run dev
```

The web app will open automatically at <http://localhost:5173>.

---

## Environment Variables

### API (`api/.env`)

Copy `api/.env.example` to `api/.env` and update the values:

| Variable | Description | Default |
|----------|-------------|---------|
| `DATABASE_URL` | PostgreSQL connection string | `postgres://app:app@localhost:5432/app` |
| `JWT_SECRET` | Secret key for JWT signing | `change-me-in-production` |
| `PORT` | Port the API listens on | `4000` |
| `NODE_ENV` | Node environment | `development` |
| `FILE_UPLOAD_DIR` | Directory for uploaded files | `./uploads` |

### Web (`web`)

The web app reads `VITE_API_URL` at build time. When running via Docker Compose, this is set automatically; for manual local development, the default in `vite.config.ts` points to `http://localhost:4000/api/v1`.

---

## Available Scripts

### API (`cd api`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot-reload |
| `npm run build` | Compile TypeScript to `dist/` |
| `npm start` | Run compiled production build |
| `npm run prisma:generate` | Regenerate Prisma client after schema changes |
| `npm run prisma:migrate` | Apply database migrations |
| `npm test` | Run API tests with Jest |
| `npm run lint` | Lint TypeScript source files |

### Web (`cd web`)

| Command | Description |
|---------|-------------|
| `npm run dev` | Start Vite development server |
| `npm run build` | Build for production (outputs to `dist/`) |
| `npm run serve` | Preview production build locally |

---

## Project Structure

```
Lost-Find-Go/
├── api/                  # Express + TypeScript backend
│   ├── prisma/           # Prisma schema and migrations
│   ├── src/
│   │   ├── routes/       # API route handlers
│   │   ├── app.ts        # Express app setup
│   │   ├── env.ts        # Environment variable loader
│   │   └── index.ts      # Server entry point
│   └── .env.example      # Example environment variables
├── web/                  # React + Vite frontend
│   ├── src/
│   │   ├── App.tsx       # Root component
│   │   └── main.tsx      # React entry point
│   └── index.html
└── docker-compose.yml    # Multi-service Docker Compose config
```
