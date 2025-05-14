import express from "express";
import authRoutes from "./routes/authRoutes.js";
import notesRoutes from "./routes/notes.routes.js";
import cors from "cors"

const app = express();

app.use(cors());
app.use(express.json());


app.use("/", authRoutes);
app.use("/", authRoutes);
app.use("/notes", notesRoutes);


const PORT = 8080;
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
