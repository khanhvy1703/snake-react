import React, { useState } from 'react';
import {
  Box,
  Button,
  Heading,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import { useAddHighScore } from '../graphql/addHighScore';

interface IGameOverProps {
  finalScore: number;
}

const GameOver = ({ finalScore }: IGameOverProps) => {
  const { addHighScore } = useAddHighScore();
  const [name, setName] = useState('');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isSaved, setSave] = useState(false);

  const onPlayBtn = () => {
    window.location.reload();
  };

  const addNewScore = (e: React.MouseEvent) => {
    e.preventDefault();
    addHighScore({
      variables: {
        newHighScore: {
          name,
          score: finalScore,
        },
      },
    });
    onClose();
    setSave(true);
  };

  return (
    <div className='game-over-board font'>
      <Heading
        as='h2'
        size='lg'
        noOfLines={1}
        className='font'
        marginTop={'200px'}
      >
        Game Over!!!
      </Heading>
      <Text
        fontSize='md'
        marginTop={'20px'}
      >{`Your Score: ${finalScore}`}</Text>
      <Box marginTop={'20px'}>
        <Button
          colorScheme='blackAlpha'
          variant='solid'
          fontSize={'14px'}
          onClick={onPlayBtn}
        >
          Play again
        </Button>
        <Button
          colorScheme='black'
          variant='outline'
          marginLeft={'20px'}
          fontSize={'16px'}
          onClick={onOpen}
          disabled={isSaved}
        >
          Save Score
        </Button>
      </Box>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Enter your name</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Input placeholder='Your name' onChange={e => setName(e.target.value)} />
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={addNewScore}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </div>
  );
};

export default GameOver;
