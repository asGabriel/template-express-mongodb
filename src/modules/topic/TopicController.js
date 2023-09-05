import Topic from "../../models/Topic.js"

class TopicController {

    static async findAll(req, res) {
        try {
            const topics = await Topic.find({});
            res.status(200).send(topics);
        } catch (error) {
            res.status(500).send(error);
        }
    }

    static async create(req, res) {
        const body = req.body;
        try {
            const topic = await Topic.create({
                title: body.title,
                content: body.content,
                author: body.author,
            })
            res.status(200).send(topic);
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async findOneById(req, res) {
        const param = req.params.id
        try {
            const topic = await Topic.findOne({
                id: param
            })
            res.status(200).send(topic);
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async updateOnebyId(req, res) {
        const param = req.params.id
        const body = req.body
        try {
            const topic = await Topic.findOneAndUpdate({
                _id: param
            }, {
                title: body.title,
                content: body.content
            })
            res.status(200).send(topic);
        } catch (error) {
            res.status(500).send(error)
        }
    }

    static async deleteOneById(req, res) {
        const param = req.params.id
        try {
            const topic = await Topic.findOneAndDelete({
                _id: param
            })
            res.status(200).send(topic);
        } catch (error) {
            res.status(500).send(error)
        }
    }

}

export default TopicController;