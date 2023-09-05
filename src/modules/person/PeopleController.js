import People from "../../models/People.js"

export default class PeopleController {
    static async create(req, res) {
        const body = req.body;
        try {
            const person = await People.create({
                name: body.name,
                cpfncnpj: body.cpfncnpj,
            })

            res.status(200).send(person);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async findAll(req, res) {
        try {
            const people = await People.find({})
            res.status(200).send(people);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async findOneById(req, res) {
        const param = req.param.id
        try {
            const person = await People.findOne({
                id: param
            })
            if (!person) throw new Error("Person not found.")
            res.status(200).send(person);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async updateOneById(req, res) {
        const param = req.param.id;
        const body = req.body;
        try {
            const person = await People.findOneAndUpdate({
                id: param
            }, {
                name: body.name
            })
            res.status(200).send(person);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }

    static async deleteOneById(req, res) {
        const param = req.param.id;
        try {
            const person = await People.findOneAndDelete({
                id: param
            })
            res.status(200).send(person);
        } catch (error) {
            res.status(500).send(error.message);
        }
    }
}