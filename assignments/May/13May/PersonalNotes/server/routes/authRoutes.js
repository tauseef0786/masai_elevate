import express from "express";
import fs from "fs/promises"; 
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

const router = express.Router();

const usersPath = "./data/users.json";

// Read users from the JSON file
const readUsers = async () => {
  try {
    const usersData = await fs.readFile(usersPath, "utf-8");
    return JSON.parse(usersData);
  } catch (error) {
    throw new Error("Could not read users data");
  }
};

// Write users to the JSON file
const writeUsers = async (users) => {
  try {
    await fs.writeFile(usersPath, JSON.stringify(users, null, 2), "utf-8");
  } catch (error) {
    throw new Error("Could not write users data");
  }
};

// Signup
router.post("/signup", async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await readUsers();

    if (users.find(u => u.email === email)) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashed = await bcrypt.hash(password, 8);
    const newUser = { id: Date.now(), email, password: hashed };
    users.push(newUser);
    await writeUsers(users);

    res.status(201).json({ message: "Signup successful" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const users = await readUsers();

    const user = users.find(u => u.email === email);
    if (!user) return res.status(404).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match) return res.status(401).json({ message: "Incorrect password" });

    const token = generateToken({ id: user.id, email: user.email });
    res.json({ message: "Login successful", token });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

export default router;
