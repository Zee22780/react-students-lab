import Score from './Score'

const ScoreList = (props) => {
  return (  
    <>
      {props.scores.map(score =>
      <Score key={score.date} score={score}/>
        )}
    </>
  );
}

export default ScoreList;