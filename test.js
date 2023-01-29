const express = require("express");
const app = express();
const dotenv =require("dotnenv").config();
const mysqlConnectionObject = require("./config/mysql.js");
const database = mysqlConnectionObject.init();

const port = 3000;

mysqlConnectionObject.open(database);

app.get("/", (request, response) => response.send("<h1>Hello ShibaWorld</h1>"));

app.listen(port, () =>console.log("서버를 동작합니다."));


