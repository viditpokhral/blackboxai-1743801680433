
Built by https://www.blackbox.ai

---

```markdown
# Express PostgreSQL API

## Project Overview
This project is a basic Node.js and Express API that interfaces with an SQLite database for user authentication and profile management. It provides endpoints for user registration, login, and profile management, protected using JWT (JSON Web Tokens) for secure access.

## Installation

To set up this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone <repository-url>
   cd express-postgres-api
   ```

2. **Install dependencies:**
   Make sure you have **Node.js** installed, then run:
   ```bash
   npm install
   ```

3. **Set up environment variables:**
   Create a `.env` file in the root of the project and add your configuration:
   ```plaintext
   PORT=3000
   JWT_SECRET=your_jwt_secret_here
   ```

4. **Initialize the database:**
   The database will be created automatically when you run the server, but for development, you can also modify the `db.js` file to set up tables according to your needs.

## Usage

Start the server in development mode with live reload:
```bash
npm run dev
```

### API Endpoints
- **Register a User**: `POST /api/register`
- **Login**: `POST /api/login`
- **Get Profile**: `GET /api/profile`
- **Update Profile**: `PUT /api/profile`
- **Change Password**: `PUT /api/change-password`

#### Example Usage
```bash
# Register user
curl -X POST http://localhost:3000/api/register -H "Content-Type: application/json" -d '{"username": "testuser", "email": "test@example.com", "password": "password123"}'

# Login to get JWT
curl -X POST http://localhost:3000/api/login -H "Content-Type: application/json" -d '{"email": "test@example.com", "password": "password123"}'

# Access protected profile
curl -X GET http://localhost:3000/api/profile -H "Authorization: Bearer <your_jwt_token>"
```

## Features
- User registration and login functionality
- JWT based authentication for secure access to protected routes
- SQLite database for user data storage
- Basic error handling and input validation
- Profile management with update and password change capabilities

## Dependencies
The project includes the following key dependencies:
- `express`: Web framework for Node.js
- `dotenv`: Loads environment variables from a `.env` file
- `jsonwebtoken`: Implementation of JSON Web Tokens
- `bcrypt`: Password hashing function
- `sqlite3`: SQLite database driver for Node.js

To view all dependencies, check the `package.json` file.

## Project Structure
```
express-postgres-api/
├── db.js                # Database setup and query functions
├── package.json         # Project metadata and dependencies
├── package-lock.json    # Exact versions of npm dependencies
└── server.js            # Main server file with API endpoints
```

## License
This project is licensed under the ISC License.
```