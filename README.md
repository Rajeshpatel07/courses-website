# CourseHub

<div align="center">
	<img src=./client/public/Logo.png">
</div>

## Prerequisites
- **Node.js** (version 14 or higher)
- **Yarn** (installed globally)
- **Docker** (for containerization)
- **MySQL** (for the database)

## Installation

### Clone the Repository
```bash
git clone <repository-url>
cd <repository-name>
```
- Install Yarn
If Yarn is not installed, you can install it globally using npm:

```bash
npm install --global yarn
```
- Set Up the Backend (Node.js Server)
Navigate to the server directory.
Install dependencies:

```bash
cd server
yarn install
```
- Set Up `Environment Variables`
Copy the `.env.sample` environment file:
```bash
cp .env.sample .env
```
- Update the .env file with your specific configuration, including database credentials.

- Set Up the `Frontend (React)`
Navigate to the frontend directory.
Create a new React application using Yarn:

```bash

cd  client

#Install dependencies
yarn 

#run development server
yarn dev
```

## Running the Application

Build and Start Containers:
```bash 
cd server
docker compose up 
```
- Accessing the Application:
The Node.js server will be available at http://localhost:5000.
The React application will be available at http://localhost:5173.
Without Docker
Start MySQL Database
Ensure that your MySQL server is running and accessible.
Run Node.js Server
In the server directory, run:
