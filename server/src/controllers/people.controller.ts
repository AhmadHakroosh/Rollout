import { Request, Response } from "express";
import { Person } from "../models/person.model";

class PeopleController {
    public getAll(request: Request, response: Response): void {
        Person.find({}, (error, people) => {
            response.status((error ? 500 : 200));
            response.json(error || people);
        });
    }
}

export const People: PeopleController = new PeopleController();
