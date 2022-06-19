const Student = require("../models/students");
const express = require("express");
const router = express.Router();

router.post("/add-student", async (req, res) => {
    try {
        const student = await new Student(req.body).save();
        res.send(student);
    } catch (error) {
        res.send(error);
    }
});

router.get("/get-students", async (req, res) => {
    try {
        const students = await Student.find();
        res.send(students);
    } catch (error) {
        res.send(error);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const student = await Student.findOneAndUpdate(
            { _id: req.params.id },
            req.body
        );
        res.send(student);
    } catch (error) {
        res.send(error);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const student = await Student.findByIdAndDelete(req.params.id);
        res.send(student);
    } catch (error) {
        res.send(error);
    }
});

module.exports = router;