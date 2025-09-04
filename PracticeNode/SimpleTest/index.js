import express from "express";
import mongoose from "mongoose";
import argon2 from "argon2";

// db connected 
const db = async () => {
    try {
        await mongoose.connect("mongodb+srv://tauseef123:8271Raza@cluster121.tn9ibkr.mongodb.net/test")
        console.log("MongoDb Connected successfully")
    } catch (err) {
        console.log({ error: err.message })
        process.exit(1)
    }
};
const app = express()
app.use(express.json())

db();

// schema degin 
const userSchema = new mongoose.Schema({
    userName: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true }
})

const User = mongoose.model("User", userSchema)


app.post("/user", async (req, res) => {
    try {
        const { userName, email, password } = req.body;
        const hashpass = await argon2.hash(password);
        const data = new User({
            userName,
            email,
            password: hashpass
        })
        await data.save();
        res.status(201).json(data)

    } catch (error) {
        res.status(500).send({ message: "failes to registaer" })
    }
});
app.get("/user", async (req, res) => {
    try {
        const data = await User.find();
        res.status(202).json(data)

    } catch (error) {
        res.status(500).send({ message: "failes to find data" })
    }
});
app.delete("/user/:id", async (req, res) => {
    try {
        const data = await User.findByIdAndDelete(req.params.id)
        if (!data) {
            return res.status(404).json({ Message: "ID not found" })
        }
        res.status(200).json(data)

    } catch (error) {
        res.status(500).send({ message: "failes to delete data" })
    }
});
app.get("/user/:id", async (req, res) => {
    try {
        const data = await User.findById(req.params.id)
        if (!data) {
            return res.status(404).json({ Message: "ID not found" })
        }
        res.status(200).json(data)

    } catch (error) {
        res.status(500).send({ message: "failes to delete data" })
    }
});

app.patch("/user/:id", async (req, res) => {
    try {
        const data = await User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        if (!data) {
            return res.status(404).json({ Message: "ID not found" })
        }
        res.status(200).json(data)

    } catch (error) {
        res.status(500).send({ message: "failes to delete data" })
    }
});



let port = 3030;
app.listen(port, () => {
    console.log(`server connected on http://localhost:${port}`)
})
