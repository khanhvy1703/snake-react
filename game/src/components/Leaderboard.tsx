import React from 'react';
import { Box, Heading, ListItem, OrderedList} from '@chakra-ui/react';
import { useQuery } from '@apollo/client';
import { GET_ALL_PLAYER } from '../graphql/getAllPlayers';
import { getAllPlayers } from '../graphql/__generated__/getAllPlayers';
const Leaderboard = () => {
  const { data, loading, error } = useQuery<getAllPlayers>(GET_ALL_PLAYER);
  let copyPlayers = data ? [...data.players] : [];
  copyPlayers = copyPlayers.length > 1 ? copyPlayers.sort((player1, player2) => player1.score < player2.score ? 1 : player1.score === player2.score ? 0 : -1): [];
  const slicedPlayers = copyPlayers.length > 5 ? copyPlayers.slice(0, 5) : copyPlayers;

  return (
    <Box
      className='how-to-play'
      width={'200px'}
      display={'flex'}
      flexDirection={'column'}
    >
      <Heading as='h4' size='md'>
        Leaderboard
      </Heading>
      {loading ? (
        <h4>Loading ...</h4>
      ) : error ? (
        <h4>404</h4>
      ) : (
        <Box key={1}>
          <OrderedList>
            {slicedPlayers.map((player) => {
              return (
                <>
                  <ListItem key={player.id} display={'flex'} justifyContent={'space-between'} fontWeight={'500'}>
                    <span>{`${player.name}`}</span>
                    <span>{`${player.score}`}</span>
                  </ListItem>
                </>
              );
            })}
          </OrderedList>
        </Box>
      )}
    </Box>
  );
};

export default Leaderboard;
