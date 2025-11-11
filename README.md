# TypeScript Node.js Template

A minimal TypeScript Node.js project template with Express.js, featuring hot-reload development and path aliases.

## Features

- ✨ TypeScript for type safety
- 🚀 Express.js v5 web framework
- 🔥 Hot reload with Nodemon
- 📁 Path aliases (`@/` for `src/`)
- 🎨 Prettier for code formatting
- 🔐 Environment variable support with dotenv

## Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/) (v18 or higher recommended)
- [npm](https://www.npmjs.com/) (comes with Node.js)

## Quick Start

Use this template to create a new project instantly:

```bash
npx degit maliciousmuffins3/express-app new-project-name
cd new-project-name
npm install
```

## Getting Started

### 1. Clone the Repository

If you prefer to clone directly:

```bash
git clone https://github.com/maliciousmuffins3/express-app.git
cd express-app
```

Or use the template (recommended):

```bash
npx degit maliciousmuffins3/express-app my-project
cd my-project
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Environment Configuration

Create a `.env` file in the root directory (if not already present):

```bash
cp .env.example .env
```

Or create it manually with:

```env
PORT=3000
```

### 4. Run the Development Server

Start the development server with hot reload:

```bash
npm run dev
```

The server will start at `http://localhost:3000` (or the port specified in your `.env` file).

### 5. Build for Production

Compile TypeScript to JavaScript:

```bash
npm run build
```

This will generate compiled JavaScript files in the `dist/` directory.

### 6. Run Production Build

After building, run the production server:

```bash
npm start
```

## Available Scripts

| Script          | Description                              |
| --------------- | ---------------------------------------- |
| `npm run dev`   | Start development server with hot reload |
| `npm run build` | Compile TypeScript to JavaScript         |
| `npm start`     | Run the production build                 |

## Project Structure

```
ts-node-template/
├── src/
│   ├── config/
│   │   └── index.ts        # Configuration management
│   └── server.ts           # Express server entry point
├── dist/                   # Compiled JavaScript (generated)
├── node_modules/           # Dependencies
├── .env                    # Environment variables (not tracked)
├── .gitignore             # Git ignore rules
├── .prettierrc            # Prettier configuration
├── .prettierignore        # Prettier ignore rules
├── nodemon.json           # Nodemon configuration
├── package.json           # Project metadata and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md              # This file
```

## Path Aliases

This template uses path aliases for cleaner imports:

```typescript
// Instead of relative paths
import config from '../../../config';

// Use path aliases
import config from '@/config';
```

The `@/` alias maps to the `src/` directory.

## Adding New Routes

Create route files in `src/routes/`:

```typescript
// src/routes/users.ts
import { Router } from 'express';

const router = Router();

router.get('/', (req, res) => {
  res.json({ message: 'Users route' });
});

export default router;
```

Then import in `server.ts`:

```typescript
import userRoutes from '@/routes/users';

app.use('/users', userRoutes);
```

## Code Formatting

Format your code with Prettier:

```bash
npx prettier --write .
```

## Environment Variables

Available environment variables:

| Variable | Description | Default |
| -------- | ----------- | ------- |
| `PORT`   | Server port | `3000`  |

## Troubleshooting

### Port Already in Use

If you get an error that the port is already in use, either:

1. Change the `PORT` in your `.env` file
2. Kill the process using that port:
   ```bash
   # Find the process
   lsof -i :3000
   # Kill it
   kill -9 <PID>
   ```

### Module Not Found

If you encounter module resolution errors:

1. Delete `node_modules/` and `package-lock.json`
2. Run `npm install` again
3. Restart your development server

### TypeScript Errors

Ensure your TypeScript version is up to date:

```bash
npm install typescript@latest --save-dev
```

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the Apache-2.0 License.

## Author

Matthew Roxas

## Support

For issues and questions, please open an issue in the GitHub repository.
