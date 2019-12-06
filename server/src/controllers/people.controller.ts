import { Request, Response } from "express";
import { Model } from "mongoose";
import { IPerson } from "../interfaces/person.interface";
import { Person } from "../models/person.model";

class PeopleController {

    /**
     * create - Creates a new person
     * @param {Request} request - forwared request object from API gateway
     * @param {Response} response - forwared response object from API gateway
     */
    public create(request: Request, response: Response): void {
        const person = new Person(request.body);
        person.save((error: Error, entity: IPerson) => {
            response.status((error ? 500 : 200))
                .json(error || {
                    _id: entity._id,
                    firstname: entity.firstname,
                    lastname: entity.lastname
                });
        });
    }

    /**
     * retrieve - Retrieves all existing people
     * @param {Request} request - forwared request object from API gateway
     * @param {Response} response - forwared response object from API gateway
     */
    public retrieve(request: Request, response: Response): void {
        Person.find({}, { firstname: 1, lastname: 1 }, (error: Error, people: Array<Model<IPerson>>) => {
            response.status((error ? 500 : 200))
                .json(error || people);
        });
    }

    /**
     * update - Updates an existing person with new data
     * @param {Request} request - forwared request object from API gateway
     * @param {Response} response - forwared response object from API gateway
     */
    public update(request: Request, response: Response): void {
        Person.findByIdAndUpdate(request.params.id, request.body, (error: Error, person: IPerson) => {
            person = Object.assign(person, request.body);
            response.status((error ? 500 : 200))
                .json(error || {
                    _id: person._id,
                    firstname: person.firstname,
                    lastname: person.lastname
                });
        });
    }

    /**
     * delete - Deletes a person with the passed id and responses with the deleted person data
     * @param {Request} request - forwared request object from API gateway
     * @param {Response} response - forwared response object from API gateway
     */
    public delete(request: Request, response: Response): void {
        Person.findByIdAndDelete(request.params.id, (error: Error, person: IPerson) => {
            response.status((error ? 500 : 200))
                .json(error || {
                    _id: person._id,
                    firstname: person.firstname,
                    lastname: person.lastname
                });
        });
    }
}

export const People: PeopleController = new PeopleController();
