import { createContext, useState } from "react";

export const StudentContex = createContext();

const StudentProvider = ({ children }) => {
  console.log(children);
  const [studentName, setStudentName] = useState("");
  const [students, setStudents] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [editableStudent, setEditableStudent] = useState(null);
  return (
    <StudentContex.Provider
      value={{
        studentName,
        setStudentName,
        students,
        setStudents,
        editMode,
        setEditMode,
        editableStudent,
        setEditableStudent,
      }}
    >
      {children}
    </StudentContex.Provider>
  );
};
export default StudentProvider;
