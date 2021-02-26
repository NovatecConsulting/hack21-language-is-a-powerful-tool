import React, { useState } from "react";
import { Container} from "@material-ui/core";
import QuestionComponent from "./QuestionComponent";
import { fetchData, useDispatch, useReducerState } from "../state";
import { setCorrectAnswers } from "../state/Actions";
import { Redirect, useLocation } from "react-router-dom";
import { validLanguages, maxQuestionCount, defaultLanguage } from "../state/Context";

const QuizPage: React.FC = () => { 
  const dispatch = useDispatch();
  const { questions, correctAnswers } = useReducerState();
  const [ questionIndex, setQuestionIndex ] = useState(0);
  const [ showResult, setShowResult ] = useState(false);
  const [ answerIsCorrect, setAnswerIsCorrect ] = useState(false);
  const { search } = useLocation();
  const match = search.match(/lang=(.*)(&.*)?/);
  const lang = toValidLanguage(match?.[1]);

  React.useEffect(() => {
    fetchData(dispatch, lang);
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

  function toValidLanguage(lang: any) : string {
    return (lang && validLanguages.some(l => l == lang)) ? lang : defaultLanguage
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
          language={lang}
        />
      )}
      {!!questions && questions.length > 0 && (questionIndex === questions.length || questionIndex === maxQuestionCount) && (
        <Redirect to="/result"/>
      )}
    </Container>
  );
};

export default QuizPage;