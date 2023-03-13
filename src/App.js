// import SkillSection from "./SkillSection";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);

  const createStudentHandler = (e) => {
    e.preventDefault();
    if (!studentName) {
      return alert("please provide a valid name");
    }
    const newStudent = {
      id: Date.now() + "",
      name: studentName,
      // isPresent : undefined
    };
    setStudents([...students, newStudent]);
    setStudentName("");
  };

  const removeHandler = (id) => {
    // const newstudentList = students.filter((item)=>item.id !== id);
    // setStudents(newstudentList);
    setStudents(students.filter((item) => item.id !== id));
  };

  const editHandler = (id) => {
    const toBeEditedStudent = students.find((item) => item.id === id);
    setEditMode(true);
    setEditableStudent(toBeEditedStudent);
    setStudentName(toBeEditedStudent.name);
  };

  const updateHandler = (e) => {
    e.preventDefault();
    if (!studentName) {
      return alert("please provide a valid name");
    }
    const newstudentList = students.map((item) => {
      if (item.id === editableStudent.id) {
        item.name = studentName;
      }
      return item;
    });
    setStudents(newstudentList);
    setStudentName("");
    setEditMode(false);
    setEditableStudent(null);
  };

  const presentHandler = (id) => {
    const newstudentList = students.map((item) => {
      if (item.id == id) {
        if (item.isPresent === undefined) {
          item.isPresent = true;
        } else if (item.isPresent === true) {
          alert("This student is already in present list");
        } else if (item.isPresent === false) {
          alert("Please make use of accidentally added button");
        }
      }
      return item;
    });
    setStudents(newstudentList);
  };

  const absentHandler = (id) => {
    const newstudentList = students.map((item) => {
      if (item.id == id) {
        if (item.isPresent === undefined) {
          item.isPresent = false;
        } else if (item.isPresent === true) {
          alert("Please make use of accidentally added button");
        } else if (item.isPresent === false) {
          alert(" This student is already in absent list");
        }
      }
      return item;
    });
    setStudents(newstudentList);
  };

  const toggleHandler = (id) => {
    const newstudentList = students.map((item) => {
      if (item.id == id) {
        item.isPresent = !item.isPresent
      }
      return item;
    });
    setStudents(newstudentList);
  }

  return (
    <div>
      <form
        onSubmit={(e) =>
          editMode ? updateHandler(e) : createStudentHandler(e)
        }
        className="student-form"
      >
        <input
          type="text"
          value={studentName}
          onChange={(e) => setStudentName(e.target.value)}
        ></input>
        <button
          onClick={(e) =>
            editMode ? updateHandler(e) : createStudentHandler(e)
          }
          type="submit"
        >
          Add Student
        </button>
      </form>
      <div className="student-section">
        <div className="list all-student-list">
          <h2>All Student's list</h2>
          <ul>
            {students.map((student) => (
              <li>
                <span>{student.name}</span>
                <button onClick={() => editHandler(student.id)}>Edit</button>
                <button onClick={() => removeHandler(student.id)}>
                  Delete
                </button>
                <button onClick={() => presentHandler(student.id)}>
                  Make Present
                </button>
                <button onClick={() => absentHandler(student.id)}>
                  Make Absent
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div className="list present-student-list">
          <h2>Present Student's list</h2>
          <ul>
            {students
              .filter((item) => item.isPresent === true)
              .map((student) => (
                <li>
                  <span>{student.name}</span>
                  <button onClick={() => toggleHandler(student.id)}>Accidentally Added</button>
                </li>
              ))}
          </ul>
        </div>
        <div className="list absent-student-list">
          <h2>Absent Student's list</h2>
          <ul>
            {students
              .filter((item) => item.isPresent === false)
              .map((student) => (
                <li>
                  <span>{student.name}</span>
                  <button onClick={() => toggleHandler(student.id)}>Accidentally Added</button>
                </li>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};
export default App;
