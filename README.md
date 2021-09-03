# Trinks Management System
Trinks management system is a API where you can register clients, process and get information about them

## Technologies
- NodeJs;
- Express;
- Typescript;
- Postgres;
- TypeORM;
- Joi.

# How to run

  1. Clone this repository
  2. install dependecies
```bash
npm i
```
  3. Create a Postgres database
  4. Insert the url database and port in .env file following .env.example
  5. Run the migrations in your database
```bash
npm run typeorm migration:run
```
  6. Run server in development mode
  ```bash
npm run dev
```
  7. Or run server in production mode
  ```bash
npm run start
```
  8. Optional - use the heroku url in your front-end app
   ```bash
https://trinks-system.herokuapp.com/
```
