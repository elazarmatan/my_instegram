import express, { json } from "express";
import "dotenv/config";
import cors from "cors";
import routerPosts from "./routes/posts.js";
import userRouter from "./routes/users.js";
import fileUpload from "express-fileupload";
import bodyParser from "body-parser";

const server = express();
const corsOptions = "http://localhost:5174/";

server.use(cors(corsOptions));

server.use("/", (req, res, next) => {
  console.log(`method: ${req.method} url: ${req.url}`);
  next();
});



server.use(express.static("images"));

server.use(
  fileUpload({ createParentPath: true})
);
server.use(json());
server.use(express.urlencoded({}));


server.use("/posts", routerPosts);
server.use("/users", userRouter);

server.listen(process.env.PORT, () =>
  console.log(`server listening on port:${process.env.PORT}`)
);
