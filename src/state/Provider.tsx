import React from "react";
import { DispatchContext, StateContext } from "./Context";
import { reducer } from "./Reducer";

const StateProvider: React.FC<{}> = ({ children }) => {
    const [state, dispatch] = React.useReducer(reducer, {
        questions: [],
        correctAnswers: 0
    });

    return (
        <DispatchContext.Provider value={dispatch}>
            <StateContext.Provider value={state}>
                {children}
            </StateContext.Provider>
        </DispatchContext.Provider>
    );
};

export default StateProvider; 