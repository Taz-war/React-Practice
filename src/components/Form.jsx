export const Form = (props) => {
  const createHandler = (e) => {
    e.preventDefault();
    if (!props.noteTitle) {
      alert("Please Provide a Valid title");
    } else {
      const newNote = {
        id: Date.now() + "",
        title: props.noteTitle,
      };
      props.setNotes([...props.notes, newNote]);
      props.setNoteTitle("");
    }
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!props.noteTitle) {
      return alert("Please Provide a Valid title");
    }
    const newNotes = props.notes.map((item) => {
      if (item.id === props.editableMode.id) {
        item.title = props.noteTitle;
      }
      return item;
    });
    props.setNotes(newNotes);
    props.setEditMode(false);
    props.setEditableMode(null);
    props.setNoteTitle("");
  };
  return (
    <form
      onSubmit={(e) => {
        props.editMode ? updateHandler(e) : createHandler(e);
      }}
    >
      <input
        value={props.noteTitle}
        type="text"
        onChange={(event) => props.setNoteTitle(event.target.value)}
      ></input>
      <button
        onClick={(e) => {
          props.editMode ? updateHandler(e) : createHandler(e);
        }}
        type="submit"
      >
        {props.editMode ? "Update Now" : "Add Note"}
      </button>
    </form>
  );
};
