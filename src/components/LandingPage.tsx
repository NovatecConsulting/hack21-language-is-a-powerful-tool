import React from "react";
import { Box, Button, Container } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";

const LandingPage: React.FC = () => (
  <Container maxWidth="md">
    <Box boxShadow={2} padding={2} marginTop={4}>
      <h1>💬 Would you say it?</h1>
      <Box color="text.primary" marginBottom={4}>
        The rules are easy: We got <u>10 questions</u> for you to find out if
        you know how to talk to the human beings around you. Each question also
        comes with a brief explanation why something might be problematic to
        say, so hopefully you'll learn something new.
        <br />
        <br />
        But most of all: Have fun and be nice to people 🧡
      </Box>

      <Box>
        <RouterLink to="/quiz">
          <Button variant="contained">Start</Button>
        </RouterLink>
      </Box>
    </Box>
  </Container>
);

export default LandingPage;
