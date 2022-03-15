import Student from './Student'

const StudentList = (props) => {
  return (  
    <>
    <h2>hi</h2>
    {props.students.map(student =>
      <Student key={student.name} student={student}/>
      )}
    </>
  )
}

export default StudentList;