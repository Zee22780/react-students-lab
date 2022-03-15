
const Student = (props) => {
  return (  
    <>
      <h3>{props.student.name}:</h3>
      <p>{props.student.bio}</p>
    </>
  );
}

export default Student;