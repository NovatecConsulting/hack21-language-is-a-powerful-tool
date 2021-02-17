import React, { useState } from "react";
import { Button, Box, Container, Radio, RadioGroup, FormControl, FormLabel, FormControlLabel } from "@material-ui/core";
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
    <Container maxWidth="md">
      <Box boxShadow={2} padding={3} marginTop={4} className="mainBox">
      <h2>💬 Statement {index + 1}</h2>
      <Box className="aussage">
        <p>"{question.question}"</p>
      </Box>
      <FormControl component="fieldset" className="answer-section">
        <FormLabel component="legend">{question.topic}</FormLabel>
        <RadioGroup aria-label="answers" name="answers" onChange={handleChange} row>
          <FormControlLabel value="yes" control={<Radio color="primary"/>} label="Yes" disabled={showResult}/>
          <FormControlLabel value="no" control={<Radio color="primary"/>} label="No" disabled={showResult}/>
        </RadioGroup>
      </FormControl>
      {showResult && (
      <Box marginBottom={5}>
        <Box padding={2} className={answerCorrect ? "same" : "different"}>{answerCorrect ? "🎉 Great, we are on the same page" : "🚨 Sorry, we see have a different interpretation"}</Box>
        <Box className="explanation">
          <h4>💡 Explanation</h4>
          <p>{question.explanation}</p>
        </Box>
      </Box>
      )}
      {!showResult ?
        <Box className="button"><Button variant="contained" color="primary" disableElevation onClick={handleCheckResult}>Check Result</Button></Box>
        :
        <Box className="button"><Button variant="contained" color="primary" disableElevation onClick={nextQuestion}>Next Question</Button></Box>
      }
      </Box>
    </Container>
  );
};

export default QuestionComponent;