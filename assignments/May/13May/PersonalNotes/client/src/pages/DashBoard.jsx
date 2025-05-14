import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState({ title: "", content: "" });
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchNotes = async () => {
      const token = localStorage.getItem("token");
      if (!token) {
        navigate("/login");
        return;
      }

      try {
        const response = await fetch("http://localhost:8080/notes", {
          method: "GET",
          headers: { Authorization: `Bearer ${token}` },
        });

        const data = await response.json();
        setNotes(data);
      } catch (error) {
        setError("Failed to fetch notes");
      }
    };
    fetchNotes();
  }, [navigate]);

  const handleNoteChange = (e) => {
    const { name, value } = e.target;
    setNewNote((prevNote) => ({ ...prevNote, [name]: value }));
  };

  const handleCreateNote = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem("token");
    if (!newNote.title || !newNote.content) {
      setError("Please fill in all fields");
      return;
    }

    try {
      const response = await fetch("http://localhost:8080/notes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(newNote),
      });

      const data = await response.json();
      if (response.status === 201) {
        setNotes((prevNotes) => [...prevNotes, data.note]);
        setNewNote({ title: "", content: "" });
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to create note");
    }
  };

  const handleDeleteNote = async (id) => {
    const token = localStorage.getItem("token");

    try {
      const response = await fetch(`http://localhost:8080/notes/${id}`, {
        method: "DELETE",
        headers: { Authorization: `Bearer ${token}` },
      });

      const data = await response.json();
      if (response.status === 200) {
        setNotes((prevNotes) => prevNotes.filter((note) => note.id !== id));
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Failed to delete note");
    }
  };

  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h2>Dashboard</h2>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <form onSubmit={handleCreateNote}>
        <input
          type="text"
          name="title"
          placeholder="Note Title"
          value={newNote.title}
          onChange={handleNoteChange}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        <textarea
          name="content"
          placeholder="Note Content"
          value={newNote.content}
          onChange={handleNoteChange}
          style={{ width: "100%", padding: "10px", margin: "10px 0" }}
        />
        <button type="submit" style={{ padding: "10px", width: "100%" }}>
          Create Note
        </button>
      </form>

      <h3>Your Notes:</h3>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <h4>{note.title}</h4>
            <p>{note.content}</p>
            <button
              onClick={() => handleDeleteNote(note.id)}
              style={{ backgroundColor: "red", color: "white" }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dashboard;
