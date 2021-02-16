import React, { useState } from "react";
import { Button, Container, Box } from "@material-ui/core";
import { fetchData, useDispatch, useReducerState } from "../state";
import { Link as RouterLink } from "react-router-dom";
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

  React.useEffect(() => {
    fetchData(dispatch);
    setResult(correctAnswers);
  }, []);

   return (
    <Container maxWidth="md">
      <Box boxShadow={2} padding={2} marginTop={4} className="mainBox">
      <h2>📊 Results</h2>
      <p>You scored <b>{result} of {maxQuestionCount}</b> ({result/maxQuestionCount*100}%) correct answers</p>
      <Box padding={3} className="reward">{getRewardText(result, maxQuestionCount)}</Box>
      <Box marginTop={4}>
      <RouterLink to="">
        <Button variant="contained">Try again</Button>
      </RouterLink>
      </Box>
      </Box>
    </Container>
  );

  function getRewardLevel(correctCount: number, totalCount: number): String  {
    var result = correctCount/totalCount;
    if(result < 0.25) {
      return resultLevel.BAD;
    } else if(result >= 0.25 && result < 0.5) {
      return resultLevel.MEH;
    } else if(result >= 0.5 && result < 0.85) {
      return resultLevel.GOOD;
    } else {
      return resultLevel.PERFECT;
    }
  }

  function getRewardText(correctCount: number, totalCount: number): String {
    var rewardLevel = getRewardLevel(correctCount, totalCount);
    switch(rewardLevel) {
      case resultLevel.BAD:
        return "😰 Whoopsie. Maybe you take another shot?";
      case resultLevel.MEH:
        return "😕 Good, but there is still room for improvement. Why don't you try again?";
      case resultLevel.GOOD:
        return "😍 Great work. Keep it up to get to 100%";
      case resultLevel.PERFECT:
        return "🥳 Awesome! You obviously know your way around words and have a deep understanding of feminism";
      default:
        return "🤖 Bleep bloop, something is wrong";
    }
  }
}

export default ResultPage;