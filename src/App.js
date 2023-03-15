// import SkillSection from "./SkillSection";
import { useState, useEffect } from "react";
import "./App.css";

const App = () => {
  const [notes, setNotes] = useState([]);
  const [notetitle, setNotetitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editableNote, setEditableNote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const getAllNotes = async () => {
    try {
      const response = await fetch("http://localhost:8080/notes");
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const data = await response.json();
      setNotes(data);
      setNotetitle("");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      setErrorMessage(error.message);
    }
  };

  const createHandler = (e) => {
    e.preventDefault();
    if (!notetitle) {
      return alert("Please enter valid title");
    }
    const newNote = {
      id: Date.now() + "",
      title: notetitle,
    };
    fetch("http://localhost:8080/notes", {
      method: "POST",
      body: JSON.stringify(newNote),
      headers: {
        "Content-type": "application/json",
      },
    }).then(() => {
      getAllNotes();
    });
  };

  const removeHandler = (id) => {
    fetch(`http://localhost:8080/notes/${id}`, {
      method: "DELETE",
    }).then(() => {
      getAllNotes();
    });
  };

  // const editHandler = (id) => {
  //   const toBeEditedNote = notes.find((item) => item.id === id); // 1 === 1;

  //   setEditMode(true);
  //   setEditableNote(toBeEditedNote);
  //   setNotetitle(toBeEditedNote.title);
  // };

  // const updateHandler = (e) => {
  //   e.preventDefault();
  //   if (!notetitle) {
  //     return alert(`Please Provide a valid title`);
  //   }

  //   // const newNotes = notes.map((item) => {
  //   //   // 2
  //   //   if (item.id === editableNote.id) {
  //   //     item.title = notetitle;
  //   //   }

  //   //   return item;
  //   // });
  
  //   fetch(`http://localhost:8080/notes`, {
  //     method: "PUT",
  //     body: JSON.stringify(notes.map((item) => {
  //       // 2
  //       if (item.id === editableNote.id) {
  //         item.title = notetitle;
  //       }
  
  //       return item;
  //     })),
  //     headers: {
  //       "Content-type": "application/json; charset=UTF-8",
  //     },
  //   }).then(() => {
  //     getAllNotes();
  //   });

  //   // setNotes(newNotes);
  //   setEditMode(false);
  //   setEditableNote(null);
  //   setNotetitle("");
  // };

  useEffect(() => {
    getAllNotes();
  }, []);
  return (
    <div className="App">
      <form onSubmit={createHandler}>
        <input
          type="text"
          value={notetitle}
          onChange={(e) => setNotetitle(e.target.value)}
        ></input>
        <button
          type="submit"
          onClick={(e) => {
            editMode ? updateHandler(e) : createHandler(e);
          }}
        >
          {editMode ? "Update Note" : "Create Note"}
        </button>
      </form>
      <ul>
        {notes.map((note) => (
          <li key={note.id}>
            <span>{note.title}</span>
            <button onClick={() => editHandler()}>Edit</button>
            <button onClick={() => removeHandler(note.id)}>Delete</button>
          </li>
        ))}
      </ul>
      {isLoading && <div> Loading...........</div>}
      {errorMessage && <p>{errorMessage}</p>}
    </div>
  );
};
export default App;
