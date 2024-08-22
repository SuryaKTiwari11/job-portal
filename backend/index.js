import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./utils/db.js";
import userRoute from "./routes/user.route.js";
import companyRoute from "./routes/company.route.js";
import jobRoute from "./routes/jobs.route.js";
import globalErrorHandler from "./controllers/errorController.js";
const AppError = "./utils/appError.js";

dotenv.config({});
const app = express();

// Middleware
app.use(express.json()); // <-- Corrected
app.use(express.urlencoded({ extended: true })); // <-- Corrected
app.use(cookieParser());

const corsOption = {
  origin: "http://localhost:5173", // <-- Corrected
  credentials: true,
};
app.use(cors(corsOption));

const PORT = process.env.PORT || 3000;

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

app.listen(PORT, () => {
  connectDB();
  console.log(`Server running at port ${PORT}`);
});

// Test route
app.get('/test', (req, res) => {
  res.send('Server is running!');
});



/*
we first imported express then we called it 
const app = express();

app.listen() is used to start a server
it requires port and callback function

we need to add middle ware
app.use(express.json);
request shall come in a json format

app.use(express.urlencoded({ extended: true }));
This line of code lets your app easily 
handle and work with data that users submit 
through forms on your website.

cookie-parser is like a helper tool that makes it 
easy for your Express app
to work with cookies, whether you're 
reading them from the user's request 
or setting new ones.

cors option
This code sets up your server so that your front-end,
running on http://localhost:5173, can safely communicate
with your back-end. It also allows the front-end to send 
cookies or authentication info when making requests to the 
server.

app.get("/home", (req, res) => {
   return res.status(200).json({
     message: "i am coming from the backend",
    success: true,
   });
 });
 */
