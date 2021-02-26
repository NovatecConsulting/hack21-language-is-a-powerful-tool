import { getQuestions } from "../data/de/questions_de";
import { Question } from "../types/Question";
import { LANG } from "./Language";

const getQuestions_DE = (): Question[] => shuffleArray(shuffleArray(getQuestions()));

export function getQuestionsByLang(lang: string): Question[] {
  switch(lang) {
    case LANG.DE:
      return getQuestions_DE();
    default:
      return getQuestions_DE();
  }
}

function shuffleArray(array: Question[]) {
  let curId = array.length;
  while (0 !== curId) {
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}