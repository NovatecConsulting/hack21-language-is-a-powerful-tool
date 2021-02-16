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
    <Container maxWidth="md">
      <Box boxShadow={2} padding={2} marginTop={4} className="mainBox">
      <h2>💬 Statement {index + 1}</h2>
      <Box className="aussage">
        <p>"{question.question}"</p>
      </Box>
      <h3>{question.topic}</h3>
        <RadioGroup>
          <span>
            <span><Radio value="yes" title="ja" onChange={handleChange} disabled={showResult}/>Yes</span>
            <span><Radio value="no" title="nein" onChange={handleChange} disabled={showResult}/>No</span>
          </span>
        </RadioGroup>
        {showResult && (
        <Box marginBottom={5}>
          <h4>{answerCorrect ? "🎉 Great, we see it this way as well" : "🚨 Sorry, you shouldn't say that"}</h4>
          <hr/>
          <h4>💡 Explanation</h4>
          <p>{question.explanation}</p>
        </Box>
        )}
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