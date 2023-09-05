import express from "express";
import TopicController from "../modules/topic/TopicController.js";

const routes = express.Router();

routes.get("/topics", TopicController.findAll)
routes.get("/topics/:id", TopicController.findOneById)
routes.post('/topics', TopicController.create)
routes.put("/topics/:id", TopicController.updateOnebyId)
routes.delete("/topics/:id", TopicController.deleteOneById)

export default routes;