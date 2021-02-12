import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Box } from "@material-ui/core";
import { routes } from "./routes";
import StateProvider from "./state/Provider";

const App: React.FC = () => {
  return (
    <>
      <Box>
        <StateProvider>
          <BrowserRouter>
            <Switch>
              {routes.map((route: any, key: any) => ( 
                <Route {...route} key={key} />
              ))}
            </Switch>
          </BrowserRouter>
        </StateProvider>
      </Box>
    </>
  );
};
export default App;
