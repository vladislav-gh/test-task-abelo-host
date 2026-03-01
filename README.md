## Getting Started

Run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Quick Start with Docker

### Using Docker Compose

The `compose.yml` includes both Node.js and Bun configurations. Run one service at a time to avoid port conflicts.

**Node.js:**

```bash
# Run with Node.js
docker compose up nextjs-standalone --build
```

**Bun:**

```bash
# OR run with Bun
docker compose up nextjs-standalone-with-bun --build
```

**Stop the application:**

```bash
docker compose down
```

### Using Docker Build

**Node.js:**

```bash
# Build the image
docker build -t nextjs-standalone-image .

# Run the container
docker run -p 3000:3000 nextjs-standalone-image
```

**Bun:**

```bash
# Build the image
docker build -f Dockerfile.bun -t nextjs-standalone-bun-image .

# Run the container
docker run -p 3000:3000 nextjs-standalone-bun-image
```

**Open your browser:** Navigate to [http://localhost:3000](http://localhost:3000)
