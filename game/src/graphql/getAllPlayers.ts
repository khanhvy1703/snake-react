import { gql } from "@apollo/client"; 

export const GET_ALL_PLAYER = gql`
  query getAllPlayers {
    players {
      id
      name
      score
    }
  }
`
