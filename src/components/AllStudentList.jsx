import { useContext } from "react";
import { StudentContex } from "../contexts/Student";

const AllStudentList = () => {
  const {
    students,
    setStudents,
    setEditMode,
    setEditableStudent,
    setStudentName,
  } = useContext(StudentContex);

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

  return (
    <div className="list all-student-list">
      <h2>All Student's list</h2>
      <ul>
        {students.map((student) => (
          <li key={student.id}>
            <span>{student.name}</span>
            <button onClick={() => editHandler(student.id)}>Edit</button>
            <button onClick={() => removeHandler(student.id)}>Delete</button>
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
  );
};
export default AllStudentList;
