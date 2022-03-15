import ScoreList from './ScoreList'

const Student = (props) => {
  return (  
    <>
      <h3>{props.student.name}:</h3>
      <p>{props.student.bio}</p>
      <p><ScoreList scores={props.student.scores}/></p>
    </>
  );
}

export default Student;