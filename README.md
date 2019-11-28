# Koa. Project template.

- [Used technologies](#used-technologies)
- [Code structure](#code-structure)
- [Environments](#environments)
- [Logger levels](#logger-levels)


## Used technologies

- **Databases**
  - `mysql`
- **Server**
  - `Koa`
- **Utils**
  - `dotenv`
- **Logging**
  - `pino` - [Very low overhead Node.js logger](https://github.com/pinojs/pino)

## Code structure

```
| dotenv // template file for generating .env file to use it in the different environments
|
| service
|-- index.js // entry point in the app
|-- logger.js
|
|-- classes
|-- |-- mysql.js // mysql class to manage connection and handle mysql events
|
|-- helpers
|-- |-- env.js // parsing .env file
|-- |-- ... // other helpers
|
|-- libs
|-- |-- mysql.js // connections pool to mysql server
|
|-- middlewares // common middlewares
|-- repositories // common repositories
|-- services // common services
|-- routes
|
|-- modules // logically separate parts of the application. Each module may contain router, controller, middlewares, repositories
|-- |-- users
|-- |-- health
```

## [Environments](dotenv)

- `APP_PORT` - port on which the server would run
- `LOGGER_LEVEL` - (integer value to define logs to show)[#logger-levels]
- `MYSQL_DB_HOST`, `MYSQL_DB_PORT`, `MYSQL_DB_USER`, `MYSQL_DB_PASSWORD`, `MYSQL_DB_NAME`, `MASTER_DB_CONNECTION_LIMIT` - MySQL server credentials and options
- `GLOBAL_SALT` - global salt for password hashing
- `RSA_PRIVATE_KEY` - RSA private key for jwt.sign
- `RSA_PUBLIC_KEY` - RSA public key for jwt.verify
- `JWT_EXPIRES_IN` - jwt token lifetime

## Logger levels

| Value | Level |
| ----- | ----- |
| 20    | debug |
| 30    | info  |
| 40    | warn  |
| 50    | error |
| 60    | fatal |
