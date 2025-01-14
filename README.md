# Job Board Backend

This project is a backend system for managing job postings, built with Node.js, TypeScript, Express, and PostgreSQL. It provides RESTful APIs for creating, reading, updating, and deleting job postings. The application is designed to be deployed on Render with a PostgreSQL database.

---

## Features
- **CRUD Operations**: Create, Read, Update, and Delete job postings.
- **Database Integration**: Connects to PostgreSQL for persistent storage.
- **Environment Configuration**: Supports `.env` for secure configuration management.
- **Swagger API Documentation**: Automatically generates interactive API documentation.

---

## Tech Stack
- **Node.js**: JavaScript runtime for backend development.
- **TypeScript**: Strongly typed superset of JavaScript.
- **Express**: Web framework for building RESTful APIs.
- **PostgreSQL**: Relational database for data storage.
- **pg**: PostgreSQL client for Node.js.
- **Swagger**: API documentation generator.

---

## Prerequisites
- Node.js (v16 or later)
- npm or yarn
- PostgreSQL (local or hosted)

---

## Setup Instructions

### 1. Clone the Repository
```bash
git clone <repository-url>
cd job-board-backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Set Up Environment Variables
Create a `.env` file in the root directory with the following:
```env
DB_HOST=your-postgres-host
DB_USER=your-database-user
DB_PASSWORD=your-database-password
DB_NAME=your-database-name
DB_PORT=5432
PORT=3000
```

### 4. Database Setup
Run the following SQL commands to set up the database schema:
```sql
CREATE TABLE jobs (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    company VARCHAR(255) NOT NULL,
    location VARCHAR(255),
    salary NUMERIC NOT NULL,
    description TEXT
);
```

### 5. Build the Project
```bash
npm run build
```

### 6. Start the Server
```bash
npm start
```
The server will run at `http://localhost:3000` by default.

---

## API Endpoints

### Base URL
`http://localhost:3000`

### Endpoints

#### 1. **Get All Jobs**
- **URL**: `/jobs`
- **Method**: GET
- **Response**:
  ```json
  [
    {
      "id": 1,
      "title": "Software Engineer",
      "company": "Tech Corp",
      "location": "Remote",
      "salary": 100000,
      "description": "Develop software applications."
    }
  ]
  ```

#### 2. **Get Job by ID**
- **URL**: `/jobs/:id`
- **Method**: GET
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Software Engineer",
    "company": "Tech Corp",
    "location": "Remote",
    "salary": 100000,
    "description": "Develop software applications."
  }
  ```

#### 3. **Create Job**
- **URL**: `/jobs`
- **Method**: POST
- **Request Body**:
  ```json
  {
    "title": "Software Engineer",
    "company": "Tech Corp",
    "location": "Remote",
    "salary": 100000,
    "description": "Develop software applications."
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Software Engineer",
    "company": "Tech Corp",
    "location": "Remote",
    "salary": 100000,
    "description": "Develop software applications."
  }
  ```

#### 4. **Update Job**
- **URL**: `/jobs/:id`
- **Method**: PUT
- **Request Body**:
  ```json
  {
    "title": "Senior Software Engineer",
    "company": "Tech Corp",
    "location": "Remote",
    "salary": 120000,
    "description": "Lead software development projects."
  }
  ```
- **Response**:
  ```json
  {
    "id": 1,
    "title": "Senior Software Engineer",
    "company": "Tech Corp",
    "location": "Remote",
    "salary": 120000,
    "description": "Lead software development projects."
  }
  ```

#### 5. **Delete Job**
- **URL**: `/jobs/:id`
- **Method**: DELETE
- **Response**:
  ```json
  {
    "message": "Job deleted successfully."
  }
  ```

---

## Deployment to Render

### 1. Set Up a PostgreSQL Database on Render
- Create a new PostgreSQL instance on Render.
- Note the database credentials and update your `.env` file accordingly.

### 2. Deploy the Application
- Create a new **Web Service** on Render.
- Connect your GitHub repository.
- Set the following:
  - **Build Command**: `npm install && npm run build`
  - **Start Command**: `npm start`
  - Add the `.env` variables in the Render dashboard.

### 3. Test the Live Application
- Use the Render-provided URL to access the API.

---


---

## License
This project is licensed under the MIT License.

