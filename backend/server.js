require("dotenv").config();
const express = require("express");
const app = express()
const router = require("./router/auth-router");
const connectDb = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");
const contactRoute = require("./router/contact-router");
const cors = require("cors");
 
// 1. Middleware this line of code is used to parse the data from the body of the request

const corsOptions = {
  origin: "e-commerce-orpin-one.vercel.app",
  methods: "GET, POST, PUT, DELETE, PATCH, HEAD",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());
const port = 5000;




// 3. Connect to the database
connectDb().then(() => {
    app.listen(port, () => {
        console.log(`server is running at port: ${port}`)
      });
});

// 2. Routes    
app.use("/api/auth", router);
app.use("/api/form", contactRoute);


app.use(errorMiddleware);








  
