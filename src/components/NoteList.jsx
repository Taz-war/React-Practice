// export const NoteList = ({notes, setNotes,setEditMode,setEditableMode,setNoteTitle})
export const NoteList = (props) => {
  const { notes, setNotes, setEditMode, setEditableMode, setNoteTitle } = props;

  const removeHandler = (id) => {
    const newNotes = notes.filter((item) => item.id !== id);

    setNotes(newNotes);
  };

  const editHandler = (id) => {
    const toBeEditedNode = notes.find((item) => item.id === id);
    setEditMode(true);
    setEditableMode(toBeEditedNode);
    setNoteTitle(toBeEditedNode.title);
  };
  return (
    <ul>
      {notes?.map((item) => (
        <li key={item.id}>
          <span>{item.title}</span>
          <button onClick={() => editHandler(item.id)}>Edit</button>
          <button onClick={() => removeHandler(item.id)}>Delete</button>
        </li>
      ))}
    </ul>
  );
};
