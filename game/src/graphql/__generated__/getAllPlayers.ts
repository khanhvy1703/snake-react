/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getAllPlayers
// ====================================================

export interface getAllPlayers_players {
  __typename: "Snake";
  id: string;
  name: string;
  score: number;
}

export interface getAllPlayers {
  /**
   * Get All Players
   */
  players: getAllPlayers_players[];
}
