import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Leaderboard = () => {
  return (
    <Box className='how-to-play' width={'300px'} justifyContent={'center'} display={'flex'}>
      <Heading as='h4' size='md'>
        Leaderboard
      </Heading>
    </Box>
  );
};

export default Leaderboard;
