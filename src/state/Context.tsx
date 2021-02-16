import React from "react";
import { State, Mutation } from "./Reducer";

export const DispatchContext = React.createContext<React.Dispatch<Mutation>>(
    () => {}
);
export const useDispatch = () => React.useContext(DispatchContext);

export const StateContext = React.createContext<State>({
    questions: [],
    correctAnswers: 0
});
export const useReducerState = () => React.useContext(StateContext);

export const maxQuestionCount = 8;