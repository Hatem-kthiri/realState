import express from "express";
import morgan from "morgan";
import fileUpload from "express-fileupload";
import houseRoutes from "./routes/house.routes.js";
import brokerRoutes from "./routes/broker.routes.js";
import postRoutes from "./routes/post.routes.js";
import cors from "cors";

const app = express();
const corsOptions = {
  origin: "*",
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));
app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  fileUpload({
    tempFileDir: "./upload",
    useTempFiles: true,
  })
);

// Routes
app.use("/api", houseRoutes);
app.use("/api", brokerRoutes);
app.use("/api", postRoutes);

export { app };
