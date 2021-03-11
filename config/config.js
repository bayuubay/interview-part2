require('dotenv').config(); 
module.exports = {
"development": {
    "username": process.env.SQL_DEV_USERNAME,
    "password": process.env.SQL_DEV_PASS,
    "database": process.env.SQL_DEV_DB,
    "host": process.env.SQL_DEV_HOST,
    "dialect": process.env.SQL_DEV_DIALECT
},
"staging": {
  "username": process.env.SQL_STAGING_USERNAME,
  "password": process.env.SQL_STAGING_PASS,
  "database": process.env.SQL_STAGING_DB,
  "host": process.env.SQL_STAGING_HOST,
  "dialect": process.env.SQL_STAGING_DIALECT
},
"production": {
  "username": process.env.SQL_PROD_USERNAME,
  "password": process.env.SQL_PROD_PASS,
  "database": process.env.SQL_PROD_DB,
  "host": process.env.SQL_PROD_HOST,
  "dialect": process.env.SQL_PROD_DIALECT
}
};