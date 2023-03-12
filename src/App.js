// import SkillSection from "./SkillSection";
import { useState } from "react";
import "./App.css";
import { Form } from "./components/Form";
import { NoteList } from "./components/NoteList";

function App() {
  const [notes, setNotes] = useState([]);
  const [noteTitle, setNoteTitle] = useState("");
  const [editMode, setEditMode] = useState(false);
  const [editableMode, setEditableMode] = useState(null);

  return (
    <div className="App">
      {/* <form
        onSubmit={(e) => {
          editMode ? updateHandler(e) : createHandler(e);
        }}
      >
        <input
          value={noteTitle}
          type="text"
          onChange={(event) => setNoteTitle(event.target.value)}
        ></input>
        <button
          onClick={(e) => {
            editMode ? updateHandler(e) : createHandler(e);
          }}
          type="submit"
        >
          {editMode ? "Update Now" : "Add Note"}
        </button>
      </form> */}
      <Form
        notes={notes}
        noteTitle={noteTitle}
        setNoteTitle={setNoteTitle}
        setNotes={setNotes}
        editableMode={editableMode}
        setEditableMode={setEditableMode}
        editMode={editMode}
        setEditMode={setEditMode}
      />

      {/* <ul>
        {notes?.map((item) => (
          <li key={item.id}>
            <span>{item.title}</span>
            <button onClick={() => editHandler(item.id)}>Edit</button>
            <button onClick={() => removeHandler(item.id)}>Delete</button>
          </li>
        ))}
      </ul> */}
      <NoteList
        setNoteTitle={setNoteTitle}
        notes={notes}
        setNotes={setNotes}
        editableMode={editableMode}
        setEditableMode={setEditableMode}
        setEditMode={setEditMode}
      />
    </div>
  );
}

export default App;

// function App() {
//   const mahirskills = ["js", "react", "node"];
//   const fahimskills = ["js", "react", "node", "bootstrap"];
//   const tazwerskills = ["js", "react", "node", "css", "wp"];
//   return (
//     <div className="App">
//       <SkillSection skills={mahirskills} name="mahir" />
//       <hr />
//       <SkillSection skills={fahimskills} name="Fahim" />
//       <hr />
//       <SkillSection skills={tazwerskills} name="Tazwer" />
//       <hr />
//     </div>
//   );
// }
