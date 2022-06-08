import { gql, useMutation } from "@apollo/client";
import { GET_ALL_PLAYER } from "./getAllPlayers";
import { addHighScoreVariables, addHighScore_addHighScore } from "./__generated__/addHighScore";
import { getAllPlayers } from "./__generated__/getAllPlayers";

export const ADD_HIGH_SCORE = gql`
  mutation addHighScore($newHighScore: SnakeInput!) {
    addHighScore(newHighScore: $newHighScore) {
      id
      name
      score
    }
  }
`

export const useAddHighScore = () => {
  const [addHighScore, {data, loading, error}] = useMutation<addHighScore_addHighScore, addHighScoreVariables>(
    ADD_HIGH_SCORE, {
      update(cache, {data}) {
        const existingPlayers:getAllPlayers = cache.readQuery({query: GET_ALL_PLAYER}) ?? {players: []};

        if (data) {
          const newHighScores = [
            ...existingPlayers.players,
            {
              id: data.id,
              name: data.name,
              score: data.score,
            }
          ];

          cache.writeQuery({
            query: GET_ALL_PLAYER,
            data: {
              players: newHighScores
            },
          });
        }
      }
    });
  return {addHighScore, data, loading, error};
}