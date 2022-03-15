import Student from './Student'

const StudentList = (props) => {
  return (  
    <>
    {props.students.map(student =>
      <Student key={student.name} student={student}/>
      )}
    </>
  )
}

export default StudentList;