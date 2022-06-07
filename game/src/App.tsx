import { Box, Heading } from '@chakra-ui/react';
import React from 'react';
import './App.css';
import Game from './components/Game';
import HowToPlay from './components/How ToPlay';
import Leaderboard from './components/Leaderboard';
function App() {
  return (
    <div className='App'>
      <Heading className='font'>SNAKE</Heading>
      <Game />
      <Box display={'flex'} flexDirection={'row'} marginTop={'20px'}>
        <HowToPlay />
        <Leaderboard />
      </Box>
    </div>
  );
}

export default App;
