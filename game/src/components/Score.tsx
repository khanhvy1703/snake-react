import React from 'react';
import { Box, Text } from '@chakra-ui/react';

interface IScoreProps {
  score: number;
}

const Score = ({ score }: IScoreProps) => {
  return (
    <Box>
      <Text fontSize='sm' className='font'>{`Score: ${score}`}</Text>
    </Box>
  );
};

export default Score;