import React, { useState } from "react";
import { Button, Container, Box } from "@material-ui/core";
import { fetchData, useDispatch, useReducerState } from "../state";
import { Link as RouterLink, useLocation } from "react-router-dom";
import { maxQuestionCount } from "../state/Context";

const ResultPage: React.FC = () => {
  const { correctAnswers, questions } = useReducerState();
  const [result, setResult] = useState(0);
  const dispatch = useDispatch();

  const resultLevel = {
    BAD: "bad",
    MEH: "meh",
    GOOD: "good",
    PERFECT: "perfect"
  }

  const margins = {
    MEH: 0.25,
    GOOD: 0.5,
    PERFECT: 0.85
  }

  React.useEffect(() => {
    setResult(correctAnswers);
  }, []);

   return (
    <Container maxWidth="md">
      <Box boxShadow={2} padding={2} marginTop={4} className="mainBox">
      <h1>📊 Results</h1>
      <p>You scored <b>{result} of {maxQuestionCount}</b> ({result/maxQuestionCount*100}%) correct answers</p>
      <Box padding={2} className={getRewardLevel(result, maxQuestionCount)}>{getRewardText(result, maxQuestionCount)}</Box>
      <Box marginTop={4} className="button">
      <RouterLink to="">
        <Button variant="contained" color="primary" disableElevation >Restart Quiz</Button>
      </RouterLink>
      </Box>
      </Box>
    </Container>
  );

  function getRewardLevel(correctCount: number, totalCount: number): string  {
    var result = correctCount/totalCount;
    if(result < margins.MEH) {
      return resultLevel.BAD;
    } else if(result >= margins.MEH && result < margins.GOOD) {
      return resultLevel.MEH;
    } else if(result >= margins.GOOD && result < margins.PERFECT) {
      return resultLevel.GOOD;
    } else {
      return resultLevel.PERFECT;
    }
  }

  function getRewardText(correctCount: number, totalCount: number): string {
    var rewardLevel = getRewardLevel(correctCount, totalCount);
    switch(rewardLevel) {
      case resultLevel.BAD:
        return "🚨 Whoopsie. Maybe you take another shot?";
      case resultLevel.MEH:
        return "😕 Good, but there is still room for improvement. Why don't you try again?";
      case resultLevel.GOOD:
        return "😍 Great work. Keep it up to get to 100%";
      case resultLevel.PERFECT:
        return "🥳 Awesome! You obviously know your way around words and have a good understanding what feminism is about";
      default:
        return "🤖 Bleep bloop, something is wrong";
    }
  }
}

export default ResultPage;