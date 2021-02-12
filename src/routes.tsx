import React from 'react';
import { RouteProps } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import QuizPage from './components/Quizpage';
import ResultPage from './components/ResultPage';

export const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: () => (
      <LandingPage />
    ),
  },
  {
    path: '/quiz',
    exact: true,
    component: () => (
      <QuizPage />
    ),
  },
  {
    path: '/result',
    exact: true,
    component: () => (
      <ResultPage />
    ),
  }
];