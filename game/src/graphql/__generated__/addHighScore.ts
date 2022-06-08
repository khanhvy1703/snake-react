/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { SnakeInput } from "./../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: addHighScore
// ====================================================

export interface addHighScore_addHighScore {
  __typename: "Snake";
  id: string;
  name: string;
  score: number;
}

export interface addHighScore {
  addHighScore: addHighScore_addHighScore;
}

export interface addHighScoreVariables {
  newHighScore: SnakeInput;
}
