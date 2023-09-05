import mongoose from "mongoose";

const peopleSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
    },
    name: {
        type: String,
        required: true
    },
    cpfncnpj: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    }
})
const People = mongoose.model("people", peopleSchema)
export default People;
