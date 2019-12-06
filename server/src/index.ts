import bodyParser from "body-parser";
import dotenv from "dotenv";
import express from "express";
import DataSource from "./datasources/mongo.datasource";
import router from "./routes";
import { Person } from "./models/person.model";
import { IPerson } from "./interfaces/person.interface";

dotenv.config();

const app = express();

const PORT = process.env.APPLICATION_PORT || 8081;
const DS_CONNECTOR = process.env.DATABASE_DRIVER || "mongodb";
const DS_URL = process.env.DATABASE_URL || "database";
const DS_PORT = process.env.DATABASE_PORT || "27017";
const DS_NAME = process.env.DATABASE_NAME || "rollout";
const ds = new DataSource(DS_CONNECTOR, DS_URL, DS_PORT, DS_NAME);

ds.connect().then(() => {
    // tslint:disable-next-line:no-console
    console.log("Database connection has been established!");
});

// Clear people collection
Person.deleteMany({}, (error: Error) => {
    if(!error) {
        // tslint:disable-next-line:no-console
        console.log("Database is clear");
    }
});

const people = [
    { firstname: "Ahmad", lastname: "Hakroosh" },
    { firstname: "Eyal", lastname: "Keren" },
    { firstname: "Elad", lastname: "Cohen" }
];

Person.insertMany(people, (error: Error, people: IPerson[]) => {
    if(error) {
        // tslint:disable-next-line:no-console
        console.log(error);
    } else {
        // tslint:disable-next-line:no-console
        console.log("Database is filled with sample data");
    }
});

app.use(bodyParser.json());
app.use("/api", router);

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`server started at http://localhost:${PORT}`);
});
