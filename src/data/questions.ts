import { Question } from "../types/Question";

export const getQuestionsStraight = (): Question[] => [
  {
    topic : "Würdest du das so sagen?",
    level : "easy",
    question : "Du bist eine echte Powerfrau",
    answer : "no",
    explanation : "Man sollte immer davon ausgehen, dass Frauen genauso stark sind wie Männer. Männer werden von Haus aus nie als Power-Mann bezeichnet, man sollte also allen Menschen die gleichen Grundvoraussetzungen geben und auch nicht schon in Schubladen denken. Manche Menschen wollen auch selbst entscheiden ob und in welche Schublade sie gehören."
  },
  {
    topic : "Würdest du das so sagen?",
    level : "easy",
    question : "Frauen haben keine Ahnung von Technik/IT",
    answer : "no",
    explanation : "Es gibt zwar weniger Frauen in technischen Berufen, dass liegt aber eher an der Gesellschaft als an Unverständnis. Bestimmte Begriffe werden oft schon von Kind auf bestimmten Geschlechtern zugeordnet. Sei es durch Sprache (DER Informatiker, DER Arzt, wenn man aber eigentlich Männer und Frauen meint) oder Vorleben (Mama bleibt zuhause, Papa geht arbeiten)."
  },
  {
    topic : "Würdest du das so sagen?",
    level : "easy",
    question : "... aber Männer werden doch auch diskriminiert",
    answer : "no",
    explanation : "Diese Aussage folgt meist einer Problematik die z.B. Frauen betrifft (z.B. \"wir brauchen eine Frauenquote\") man relativiert dadurch aber das eigentlich Problem bzw. versucht vom eigentlichen Problem abzulenken. DAX notierte Unternehmen sind so groß, dass es quasi unmöglich ist, dass es keine qualifizierten Frauen gibt, die eine Führungsrolle im Vorstand übernehmen können (und das ist meist die Ausrede der Unternehmen warum es kaum Frauen im Vorstand/Management gibt) Mit der Quote kann man diese Unternehmen in die Pflicht nehmen, genauer hinzusehen. Sei es durch Ausbildungsprogramme (Female-Executive-Programs) oder ähnliches."
  },
  {
    topic : "Würdest du das so sagen?",
    level : "easy",
    question : "Frauen brauchen Ewigkeiten im Bad, reden zu viel, können nicht einparken, sind zu emotional usw.",
    answer : "no",
    explanation : "Zunächst handelt es sich bei solchen Aussagen um eine Generalisierung die auf schlechter Beobachtung beruht. Es mag ja sein, dass man eine Frau kennt die z.B. lange im Bad braucht. Es gibt aber durchaus auch Frauen die schnell sind. Des Weiteren arten solche Aussagen gerne auch in pauschales Frauenbashing aus, was nicht sehr nett ist. Du darfst kritisieren, aber bitte konkret und sachlich."
  },
  {
    topic : "Würdest du das so sagen?",
    level : "easy",
    question : "Frag doch mal bei den Mädels von HR/Marketing/CS nach",
    answer : "no",
    explanation : "Im Unternehmeskontext ist es schlicht und einfach unprofessionell: Es sind Frauen und keine Mädels. Du weißt zudem möglicherweise gar nicht, ob dort überhaupt nur Frauen sitzen. Du etablierst oder förderst gewisse veraltete, patriarchische Denkmuster."
  },
  {
    topic : "Würdest du das so sagen?",
    level : "easy",
    question : "Frauen und Männer sind in unserer Gesellschaft gleichberechtigt und werden dementsprechend auch gleich behandelt.",
    answer : "no",
    explanation : "Es mag vielleicht manchmal den Anschein erwecken, dass Frauen und Männer überall gleich behandelt werden. Leider gibt es noch viele Bereiche in denen Frauen benachteiligt sind. Dazu gehören z.B. die Vergütung oder Karrieremöglichkeiten (auch wenn vielleicht der eigene Arbeitgeber hier schon sehr gut aufgestellt ist). Aber auch tief sitzender Sexismus oder veraltete Rollenbilder führen zu einer Benachteiligung, die Auswirkungen auf das gesamte Leben der Betroffenen haben."
  }
]

export const getQuestions = (): Question[] => shuffleArray(getQuestionsStraight());

function shuffleArray(array: Question[]) {
  let curId = array.length;
  // There remain elements to shuffle
  while (0 !== curId) {
    // Pick a remaining element
    let randId = Math.floor(Math.random() * curId);
    curId -= 1;
    // Swap it with the current element.
    let tmp = array[curId];
    array[curId] = array[randId];
    array[randId] = tmp;
  }
  return array;
}