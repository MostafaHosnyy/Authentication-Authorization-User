const express = require("express");
const server = express();

require('dotenv').config();
const PORT = process.env.PORT || 3000;

const cookieParser = require("cookie-parser");

server.use(cookieParser()); 
server.use(express.json()); 

require("./config/database").connect();

const user = require("./routes/user");
server.use("/api/v1", user);

server.listen(PORT, () => {
    console.log(`App is listening at ${PORT}`);
})
