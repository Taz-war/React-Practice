import {useContext} from 'react'
import {StudentContex} from '../contexts/Student'


const AbsentStudentList = ({toggleHandler}) => {
  const {students} = useContext(StudentContex)
  return (
    <div className="list absent-student-list">
          <h2>Absent Student's list</h2>
          <ul>
            {students
              .filter((item) => item.isPresent === false)
              .map((student) => (
                <li key={student.id}>
                  <span>{student.name}</span>
                  <button onClick={() => toggleHandler(student.id)}>
                    Accidentally Added
                  </button>
                </li>
              ))}
          </ul>
        </div>
  )
}
export default AbsentStudentList