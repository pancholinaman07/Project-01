const express = require('express');
const fs = require('fs');

const {connectMongoDb} = require("./connection");
const userRouter = require("./routes/user");
const {logReqRes} = require("./middlewares")

const  app = express();
const PORT = 8000;

// Connection
connectMongoDb("mongodb://localhost:27017/youtube-app-1").then(() => console.log("MongoDB Connected!"));

// Middleware
app.use(express.urlencoded({extended: false}));
app.use(logReqRes("logs.txt"));

// Routes
app.use("/api/users", userRouter);

app.listen(PORT, () => console.log(`server started at port: ${PORT}`));
