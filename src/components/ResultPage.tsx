import React, { useState } from "react";
import { Button, Container, Box } from "@material-ui/core";
import { fetchData, useDispatch, useReducerState } from "../state";
import { Link as RouterLink } from "react-router-dom";

const ResultPage: React.FC = () => {
  const { correctAnswers } = useReducerState();
  const [result, setResult] = useState(0);
  const dispatch = useDispatch();

  React.useEffect(() => {
    fetchData(dispatch);
    setResult(correctAnswers);
  }, []);

   return (
    <Container>
      <Box boxShadow={2} padding={2} marginTop={4}>
      <h1>Result</h1>
      <p>Correct Answers: {result}</p>
      <RouterLink to="/quiz">
        <Button variant="contained">Try again</Button>
      </RouterLink>
      </Box>
    </Container>
  );
}

export default ResultPage;