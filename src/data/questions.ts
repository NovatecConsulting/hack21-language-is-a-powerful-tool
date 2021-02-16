import { Question } from "../types/Question";

export const getQuestionsStraight = (): Question[] => [
  {
    topic : "Würdest du das so sagen?",
    level : "easy",
    question : "Dein Vortrag hat mich echt vom Hocker gerissen. Du bist eine echte Powerfrau",
    answer : "no",
    explanation : "Man sollte immer davon ausgehen, dass Frauen genauso stark sind wie Männer. Männer werden von Haus aus nie als Power-Mann bezeichnet, man sollte also allen Menschen die gleichen Grundvoraussetzungen geben und auch nicht schon in Schubladen denken. Manche Menschen wollen auch selbst entscheiden ob und in welche Schublade sie gehören. Dass einen der Vortrag vom Hocker gerissen hat ist doch auch schon ein schönes Lob und ganz ohne Schubladen."
  },
  {
    topic : "Würdest du das so sagen?",
    level : "easy",
    question : "Frauen haben doch keine Ahnung von Technik oder IT",
    answer : "no",
    explanation : "Es gibt zwar weniger Frauen in technischen Berufen, dass liegt aber eher an der Gesellschaft als an Unverständnis. Bestimmte Begriffe werden oft schon von Kind auf bestimmten Geschlechtern zugeordnet. Sei es durch Sprache (DER Informatiker, DER Arzt, wenn man aber eigentlich alle Geschlechter meint) oder Vorleben (Mama bleibt zuhause, Papa geht arbeiten)."
  },
  {
    topic : "Würdest du das so sagen?",
    level : "medium",
    question : "Aber das diskriminiert doch uns Männer",
    answer : "no",
    explanation : "Diese Aussage folgt oft so oder ähnlich einer Aussage die Frauen betrifft (wie z.B. der Notwendigkeit einer Frauenquote), man relativiert dadurch aber das eigentliche Problem bzw. versucht vom eigentlichen Problem abzulenken. Eine Frauenquote ist nicht da um Männer zu diskriminieren, sondern zielt auf ein andere Problematik ab: DAX notierte Unternehmen sind so groß, dass es quasi unmöglich ist, dass es keine qualifizierten Frauen gibt die eine Führungsrolle im Vorstand übernehmen können (und das ist meist die Ausrede der Unternehmen warum es kaum Frauen im Vorstand/Management gibt) Mit der Quote kann man diese Unternehmen in die Pflicht nehmen, genauer hinzusehen. Sei es durch Ausbildungsprogramme (Female-Executive-Programs) oder ähnliches."
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
    question : "Frauen und Männer sind in unserer Gesellschaft gleichberechtigt und werden dementsprechend auch schon gleich behandelt.",
    answer : "no",
    explanation : "Es mag vielleicht manchmal den Anschein erwecken, dass Frauen und Männer überall gleich behandelt werden. Leider gibt es noch viele Bereiche in denen Frauen benachteiligt sind. Dazu gehören z.B. die Vergütung oder Karrieremöglichkeiten (auch wenn vielleicht der eigene Arbeitgeber hier schon sehr gut aufgestellt ist). Aber auch tief sitzender Sexismus oder veraltete Rollenbilder führen zu einer Benachteiligung, die Auswirkungen auf das gesamte Leben der Betroffenen haben."
  },
  {
    topic : "Würdest du das so sagen?",
    level : "easy",
    question : "(zu Kollegin nach ihrer Präsentation) Ich fand deinen Vortrag wirklich super",
    answer : "yes",
    explanation : "Niemand hat etwas gegen ein Lob oder ein paar nette Worte, wenn es ehrlich gemeint ist. Egal ob es von einem Mann oder einer Frau kommt."
  },
  {
    topic : "Würdest du das so sagen?",
    level : "medium",
    question : "Sprache zu gendern ist ein wichtiger Schritt in Richtung der Gleichstellung von Mann und Frau",
    answer : "yes",
    explanation : "Die ständige Nutzung des generischen Maskulins zeichnet (wenn auch unterbewusst) ein gewisses Bild in unseren Köpfen. So wird z.B. \"der Arzt\" automatisch als Mann interpretiert, auch wenn damit eine Frau gemeint sein könnte. Um diese Ausgrenzung anderer Geschlechter zu vermeiden, sollte man auf alternative, inkludierende Ausdrucksweisen ausweichen."
  }
]

export const getQuestions = (): Question[] => shuffleArray(shuffleArray(getQuestionsStraight()));

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