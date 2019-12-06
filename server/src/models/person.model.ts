import { Model, model, Schema } from 'mongoose';
import { IPerson } from '../interfaces/person.interface';

const schema = new Schema({
    firstname: {
        required: true,
        trim: true,
        type: String
    },

    lastname: {
        required: true,
        trim: true,
        type: String
    }
});

export const Person: Model<IPerson> = model('person', schema);
