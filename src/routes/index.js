import express from "express";
import topics from "./TopicRoutes.js"
import people from "./PeopleRoutes.js"

const routes = (app) => {
    app.route("/").get((req, res) => res.status(200).send("Template express-mongodb"));

    app.use(express.json(), topics)
    app.use(express.json(), people)
}

export default routes;