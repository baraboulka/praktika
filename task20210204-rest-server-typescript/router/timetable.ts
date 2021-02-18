import express from "express";

import { getSubjects, getSubject, addSubjects, updateSubjects, deleteSubjects } from "../controllers/controllers";

const router = express.Router();

router.use((req, res, next) => {
    console.log("The router is active!");
    next();
})

router.route("/").get(getSubjects);

router.route("/:id").get(getSubject);

router.route("/").post(addSubjects);

router.route("/").put(updateSubjects);

router.route("/").delete(deleteSubjects);

export default router; 