import express from "express";
import fs from "fs";
import path from "path";
import authenticate from "../middleware/authMiddleware.js";

const router = express.Router();
const notesPath = path.resolve("data", "notes.json");

function readNotes() {
  return JSON.parse(fs.readFileSync(notesPath, "utf-8"));
}

function writeNotes(notes) {
  fs.writeFileSync(notesPath, JSON.stringify(notes, null, 2));
}

// Create Note
router.post("/", authenticate, (req, res) => {
  const { title, content } = req.body;
  const notes = readNotes();

  const newNote = {
    id: Date.now(),
    title,
    content,
    userId: req.user.id
  };

  notes.push(newNote);
  writeNotes(notes);

  res.status(201).json({ message: "Note created", note: newNote });
});

// Get All Notes by User
router.get("/", authenticate, (req, res) => {
  const notes = readNotes();
  const userNotes = notes.filter(note => note.userId === req.user.id);
  res.json(userNotes);
});

// Delete Note
router.delete("/:id", authenticate, (req, res) => {
  const notes = readNotes();
  const noteId = Number(req.params.id);

  const note = notes.find(n => n.id === noteId);
  if (!note || note.userId !== req.user.id) {
    return res.status(403).json({ message: "Not allowed to delete this note" });
  }

  const updatedNotes = notes.filter(n => n.id !== noteId);
  writeNotes(updatedNotes);

  res.json({ message: "Note deleted" });
});

export default router;
