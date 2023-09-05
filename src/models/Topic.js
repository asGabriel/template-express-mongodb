import mongoose from "mongoose";

const topicSchema = new mongoose.Schema({
    id: {
        type: mongoose.Types.ObjectId,
    },
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: new Date()
    },
    author: { 
        type: mongoose.Schema.Types.ObjectId, ref: 'Person',
        required: true
    }
})
const Topic = mongoose.model("topics", topicSchema)
export default Topic;
