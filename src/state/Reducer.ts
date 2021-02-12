import { Question } from "../types/Question";

export type State = {
  questions: Question[];
  correctAnswers: number;
}

export type Mutation =
    | { type: "FETCH_QUESTIONS", data: Question[] }
    | { type: "UPDATE_CORRECT_ANSWERS", data: number }

export const reducer = (state: State, mutation: Mutation) => { 
  switch (mutation.type) {
    case "FETCH_QUESTIONS" :
      return {...state, questions: mutation.data };
    case "UPDATE_CORRECT_ANSWERS" :
        return {...state, correctAnswers: mutation.data };
  }
}