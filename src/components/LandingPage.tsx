import React from "react";
import { Box, Button, Container } from "@material-ui/core";
import { Link as RouterLink } from "react-router-dom";
import { maxQuestionCount } from "../state/Context";
import logo from "../nt-logo.png"

const LandingPage: React.FC = () => (
  <Container maxWidth="md">
    <Box boxShadow={2} padding={3} marginTop={4} className="mainBox">
      <h1>📣 Language is a powerful tool</h1>
      <Box color="text.primary" marginBottom={4}>
        <h4>Rules</h4>
        We got <b>{maxQuestionCount} questions</b> for you to find out if
        you know how to talk to the human beings around you. Each question also
        comes with a brief explanation why something might be problematic to
        say, so hopefully you'll learn something new.
        <br />
        <br />
        But most of all: Have fun and be nice to people 🧡
      </Box>

      <Box className="button startButton">
        <RouterLink to="/quiz">
          <Button variant="contained" color="primary" disableElevation>Start</Button>
        </RouterLink>
      </Box>

      <Box marginTop={4} padding={2} className="disclaimer">
      <h4>Disclaimer</h4>
      <p>This quiz was created during a Novatec hackathon. The questions, answers and explanations were created based on our best knowledge 
        and thorougly discussed. If you have questions or see something obviously wrong please contact the initiator <i>Stefan Schultz</i> or 
        join our internal slack channels <span id="slack">#cop-women</span>, <span id="slack">#cop-diversity</span> or <span id="slack">#cop-gendering</span> and ask, 
        or join the regular <span id="slack">Women@Novatec</span> meeting. If you don't feel comfortabel with that you can also talk to one of our trust persons:</p>
        <ul>
          <li>Zarin Kabir</li>
          <li>Ruben Burr</li>
          <li>Amra Avdic</li>
          <li>Thorsten Jakoby</li>
          <li>Dirk Maucher</li>
        </ul>
      </Box>
      <Box className="powered"><img src={logo} className="powered" /></Box>
    </Box>
  </Container>
);

export default LandingPage;
