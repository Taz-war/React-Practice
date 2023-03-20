import { useContext } from "react";
import { StudentContex } from "../contexts/Student";
import AbsentStudentList from "./AbsentStudentList";
import AllStudentList from "./AllStudentList";
import PresentStudentList from "./PresentStudentList";

const StudentSection = () => {
  const { students, setStudents } = useContext(StudentContex);
  const toggleHandler = (id) => {
    const newstudentList = students.map((item) => {
      if (item.id == id) {
        item.isPresent = !item.isPresent;
      }
      return item;
    });
    setStudents(newstudentList);
  };
  return (
    <div className="student-section">
      <AllStudentList />
      <PresentStudentList toggleHandler={toggleHandler} />
      <AbsentStudentList toggleHandler={toggleHandler} />
    </div>
  );
};
export default StudentSection;
