import React, { useState } from "react";
import { Button, Box, Container, Radio, RadioGroup } from "@material-ui/core";
import { Question } from "../types/Question";

interface Props {
  index: number;
  question: Question;
  showResult: boolean;
  answerCorrect: boolean;
  checkResult: (value: string) => void;
  nextQuestion: () => void;
}

const QuestionComponent = ({index, question, showResult, answerCorrect, checkResult, nextQuestion}: Props) => {
  const [answer, setAnswer] = useState("");
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(event.target.value);
  };

  const handleCheckResult = () => {
    checkResult(answer);
  }

  return (
    <Container>
      <h1>{question.topic}</h1>
      <Box boxShadow={3} padding={3}>
        <h4>Aussage {index + 1}</h4>
        <h3>"{question.question}"</h3>
        {showResult && (
          <Box>
            <h4>{answerCorrect ? "Richtig :-)" : "Falsch :-("}</h4>
            <h5>💡 Erklärung</h5>
            <p>{question.explanation}</p>
          </Box>
        )}
        <RadioGroup>
          <span>
            <span><Radio value="yes" title="ja" onChange={handleChange} disabled={showResult}/>Ja</span>
            <span><Radio value="no" title="nein" onChange={handleChange} disabled={showResult}/>Nein</span>
          </span>
        </RadioGroup>
        {!showResult ?
          <Button variant="contained" onClick={handleCheckResult}>Check Result</Button>
        :
          <Button variant="contained" onClick={nextQuestion}>Next Question</Button>
        }
      </Box>
    </Container>
  );
};

export default QuestionComponent;