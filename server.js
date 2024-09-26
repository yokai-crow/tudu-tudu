const express = require("express");
const router = require("./routers/todoRouter")

const dotenv = require("dotenv").config();

const app = express();

const port = process.env.PORT || 3000;




app.use(express.json());

app.use('/',router);

app.listen(port,()=>{
    console.log(`server running on port:${port}`);
});
