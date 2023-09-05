import express from "express";
import PeopleController from "../modules/person/PeopleController.js";

const routes = express.Router();

routes.get('/people', PeopleController.findAll)
routes.get("/people/:id", PeopleController.findOneById)
routes.post('/people', PeopleController.create)
routes.put("/people/:id", PeopleController.updateOneById)
routes.delete("/people/:id", PeopleController.deleteOneById)

export default routes;