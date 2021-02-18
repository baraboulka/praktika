import mongoose, { Document, Schema } from "mongoose";


export interface TimetableInterface extends Document {
    subject: string,
    teacher: string,
    weeklyAmount: number
}

const TimetableSchema: mongoose.Schema = new Schema({
    subject: {
        type: String,
        required: true
    },
    teacher: {
        type: String,
        required: true
    },
    weeklyAmount: {
        type: Number,
        required: true
    }
});

export default TimetableSchema;