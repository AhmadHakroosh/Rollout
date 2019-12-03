import dotenv from "dotenv";
import express from "express";
import router from "./routes";

dotenv.config();

const app = express();
const PORT = process.env.APPLICATION_PORT || 8081;

app.use("/api", router);

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
