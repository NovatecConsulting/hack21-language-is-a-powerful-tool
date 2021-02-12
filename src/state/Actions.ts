import { Dispatch } from "react";
import { getQuestions } from "../data/questions";
import { Mutation } from "./Reducer";
import { Question } from "../types/Question";

export const fetchData = (dispatch: Dispatch<Mutation>) => {
  const questions: Question[] = getQuestions();
  dispatch({type: "FETCH_QUESTIONS", data: questions})
}

export const setCorrectAnswers = (dispatch: Dispatch<Mutation>, correctAnswers: number) => {
  dispatch({type: "UPDATE_CORRECT_ANSWERS", data: correctAnswers})
}