import mongoose from "mongoose";

import TimetableSchema, { TimetableInterface } from "./schemas";

const TimetableModel = mongoose.model<TimetableInterface>("Timetable", TimetableSchema);

const Maths = new TimetableModel({"Math": String, "John Whilkins": String, 4: Number});
const PE = new TimetableModel({"PE": String, "Marge Westwood": String, 2: Number});
const EngLit = new TimetableModel({"English Literature": String, "Kamala Peterson": String, 3: Number});
const Science = new TimetableModel({"Science": String, "Bill Mansfield": String, 3: Number});
const Music = new TimetableModel({"Music": String, "Wendy Wong": String, 2: Number});
const Art = new TimetableModel({"Art": String, "Bob Wrangler": String, 3: Number});

const subjects = [Maths, PE, EngLit, Science, Music, Art];

TimetableModel.insertMany(subjects);

export default TimetableModel;