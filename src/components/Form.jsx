import {useContext} from 'react'
import {StudentContex} from '../contexts/Student'

 const Form = () => {
    const studentCtx =useContext(StudentContex)

    const createStudentHandler = (e) => {
        e.preventDefault();
        if (!studentCtx.studentName) {
          return alert("please provide a valid name");
        }
        const newStudent = {
          id: Date.now() + "",
          name: studentCtx.studentName,
          // isPresent : undefined
        };
        studentCtx.setStudents([...studentCtx.students, newStudent]);
        studentCtx.setStudentName("");
      };

      const updateHandler = (e) => {
        e.preventDefault();
        if (!studentCtx.studentName) {
          return alert("please provide a valid name");
        }
        const newstudentList = studentCtx.students.map((item) => {
          if (item.id === studentCtx.editableStudent.id) {
            item.name = studentCtx.studentName;
          }
          return item;
        });
        studentCtx.setStudents(newstudentList);
        studentCtx.setStudentName("");
        studentCtx.setEditMode(false);
        studentCtx.setEditableStudent(null);
      };
  return (
    <div>
        <form
        onSubmit={(e) =>
          studentCtx.editMode ? updateHandler(e) : createStudentHandler(e)
        }
        className="student-form"
      >
        <input
          type="text"
          value={studentCtx.studentName}
          onChange={(e) => studentCtx.setStudentName(e.target.value)}
        ></input>
        <button
          onClick={(e) =>
            studentCtx.editMode ? updateHandler(e) : createStudentHandler(e)
          }
          type="submit"
        >
          Add Student
        </button>
      </form>
    </div>
  )
}
export default Form
