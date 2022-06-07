import React from 'react';
import { Box, Button, Heading, Text } from '@chakra-ui/react';

interface IGameOverProps {
  finalScore: number;
}

const GameOver = ({ finalScore }: IGameOverProps) => {
  const onPlayBtn = () => {
    window.location.reload();
  }
  return (
    <div className='game-over-board game-over-font'>
      <Heading as='h2' size='lg' noOfLines={1} className='game-over-font' marginTop={'200px'}>
        Game Over!!!
      </Heading>
      <Text fontSize='md' marginTop={'20px'}>{`Your Score: ${finalScore}`}</Text>
      <Box marginTop={'20px'}>
        <Button colorScheme='blackAlpha' variant='solid' fontSize={'14px'} onClick={onPlayBtn}>
          Play
        </Button>
        <Button
          colorScheme='black'
          variant='outline'
          marginLeft={'20px'}
          fontSize={'16px'}
          disabled
        >
          Save Score
        </Button>
      </Box>
    </div>
  );
};

export default GameOver;
