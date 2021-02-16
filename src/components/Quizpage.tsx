import React, { useState } from "react";
import { Container} from "@material-ui/core";
import QuestionComponent from "./QuestionComponent";
import { fetchData, useDispatch, useReducerState } from "../state";
import { setCorrectAnswers } from "../state/Actions";
import { Redirect } from "react-router-dom";
import { maxQuestionCount } from "../state/Context";
 
const QuizPage: React.FC = () => { 
  const dispatch = useDispatch();
  const { questions, correctAnswers } = useReducerState();
  const [ questionIndex, setQuestionIndex ] = useState(0);
  const [ showResult, setShowResult ] = useState(false);
  const [ answerIsCorrect, setAnswerIsCorrect ] = useState(false);

  React.useEffect(() => {
    fetchData(dispatch);
    setCorrectAnswers(dispatch, 0);
    setShowResult(false);
  }, []);

  const nextQuestion = () => {
    setQuestionIndex(questionIndex + 1);
    setShowResult(false);
  }
  
  const checkResult = (selectedValue: string) => {
    setShowResult(true);
    if(questions[questionIndex].answer === selectedValue) {
      setAnswerIsCorrect(true);
      setCorrectAnswers(dispatch, correctAnswers + 1);
    } else {
      setAnswerIsCorrect(false);
    }
  }  

  return (
    <Container>
      {!!questions && questions.length > 0 && (questionIndex < questions.length ||  questionIndex < maxQuestionCount) && (
        <QuestionComponent 
          index={questionIndex} 
          question={questions[questionIndex]} 
          answerCorrect={answerIsCorrect} 
          showResult={showResult} 
          checkResult={checkResult} 
          nextQuestion={nextQuestion}
        />
      )}
      {!!questions && questions.length > 0 && (questionIndex === questions.length || questionIndex === maxQuestionCount) && (
        <Redirect to="/result"/>
      )}
    </Container>
  );
};

export default QuizPage;