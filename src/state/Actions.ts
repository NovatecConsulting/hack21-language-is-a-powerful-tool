import { Dispatch } from "react";
import { getQuestionsByLang } from "../data/questions";
import { Mutation } from "./Reducer";
import { Question } from "../types/Question";

export const fetchData = (dispatch: Dispatch<Mutation>, language: string) => {
  const questions: Question[] = getQuestionsByLang(language);
  dispatch({type: "FETCH_QUESTIONS", data: questions})
}

export const setCorrectAnswers = (dispatch: Dispatch<Mutation>, correctAnswers: number) => {
  dispatch({type: "UPDATE_CORRECT_ANSWERS", data: correctAnswers})
}