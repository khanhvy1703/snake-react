import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const HowToPlay = () => {
  return (
    <Box className='font-2' width={'200px'}flexDirection={'column'}>
      <Heading as='h4' size='md'>
        How to play
      </Heading>
      <Box marginTop={'5px'}>
        <Text fontSize='sm'><span className='arrow'>↑</span> Move Up</Text>
        <Text fontSize='sm'><span className='arrow'>↓</span> Move Down</Text>
        <Text fontSize='sm'><span className='arrow'>→</span> Move Left</Text>
        <Text fontSize='sm'><span className='arrow'>←</span> Move Right</Text>
      </Box>
    </Box>
  );
};

export default HowToPlay;
