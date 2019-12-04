import mongoose from 'mongoose';

const schema = new mongoose.Schema({
    firstname: {
        type: String,
        required: true,
        trim: true
    },
    
    lastname: {
        type: String,
        required: true,
        trim: true
    }
});

const Person = mongoose.model('person', schema);
export default Person;