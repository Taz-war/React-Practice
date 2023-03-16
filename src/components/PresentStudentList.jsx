import {useContext} from 'react'
import {StudentContex} from '../contexts/Student'


const PresentStudentList = ({toggleHandler}) => {
  const {students} = useContext(StudentContex)
  return (
    <div className="list present-student-list">
          <h2>Present Student's list</h2>
          <ul>
            {students
              .filter((item) => item.isPresent === true)
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
export default PresentStudentList