import React, { useCallback, useEffect, useState } from 'react';
import { ITEM_SIZE, RIGHT, LEFT, UP, DOWN } from '../constants';
import Food from './Food';
import GameOver from './GameOver';
import Score from './Score';
import Snake from './Snake';

const getRandomNumber = () => {
  const min = 1;
  const max = 97;
  return (
    Math.floor((Math.random() * (max - min + 1) + min) / ITEM_SIZE) * ITEM_SIZE
  );
};

const isEaten = (head: number[], food: number[]): boolean => {
  return head[0] === food[0] && head[1] === food[1];
};

const isCollided = (snakes: number[][]): boolean => {
  let copy = [...snakes];
  let head = copy[copy.length - 1];

  for (let i = 0; i < snakes.length - 2; i++) {
    let position = snakes[i];
    if (head[0] === position[0] && head[1] === position[1]) {
      return true;
    }
  }
  return head[0] > 98 || head[1] > 98 || head[0] < 0 || head[1] < 0;
};

const generateFood = (snakes: number[][]): number[] => {
  let foodX = getRandomNumber();
  let foodY = getRandomNumber();
  let collision = false;
  for (let i = 0; i < snakes.length - 1; i++) {
    const snake = snakes[i];
    if (snake[0] === foodX && snake[1] === foodY) {
      collision  = true;
      break;
    } else {
      continue;
    }
  }

  if (collision) {
    generateFood(snakes);
  }
  return [foodX, foodY]
};

// const changeSpeed = (score: number, speed: number):number => {
//   if (speed === 50) {
//     return 50;
//   }
//   if (score >= 0 || score < 8) {
//     return 200;
//   }
//   if (score >= 8 || score < 16) {
//     return 150;
//   }
//   if (score >= 16 || score < 24) {
//     return 100;
//   }
//   if (score >= 24 || score < 32) {
//     return 50;
//   }
//   return speed;
// };

const Game = () => {
  const [snakes, setSnakes] = useState([
    [0, 0],
    [ITEM_SIZE, 0],
  ]);
  const [food, setFood] = useState(generateFood(snakes));
  const [direction, setDirection] = useState(RIGHT);
  const [speed] = useState(50);
  const [isGameOver, setGameOver] = useState(false);
  const [score, setScore] = useState(0);

  const moveSnake = useCallback(
    (snakePos: number[][]) => {
      let positions = [...snakePos];
      let head = positions[positions.length - 1];

      switch (direction) {
        case RIGHT:
          head = [head[0] + ITEM_SIZE, head[1]];
          break;
        case LEFT:
          head = [head[0] - ITEM_SIZE, head[1]];
          break;
        case UP:
          head = [head[0], head[1] - ITEM_SIZE];
          break;
        case DOWN:
          head = [head[0], head[1] + ITEM_SIZE];
          break;
        default:
          break;
      }
      if (direction) {
        positions.push(head);
        isEaten(head, food)
          ? setFood(generateFood(positions))
          : positions.shift();
        setSnakes([...positions]);
      }
      if (isEaten(head, food)) {
        setScore(score + 1);
      }
    },
    [direction, food, score]
  );

  const onKeyClick = (event: KeyboardEvent) => {
    event = event || window.event;
    const keyCode = event.key;

    switch (keyCode) {
      case 'ArrowLeft':
        direction !== RIGHT ? setDirection(LEFT) : setDirection(RIGHT);
        break;
      case 'ArrowUp':
        direction !== DOWN ? setDirection(UP) : setDirection(DOWN);
        break;
      case 'ArrowRight':
        direction !== LEFT ? setDirection(RIGHT) : setDirection(LEFT);
        break;
      case 'ArrowDown':
        direction !== UP ? setDirection(DOWN) : setDirection(UP);
        break;
      default:
        return;
    }
  };

  useEffect(() => {
    document.onkeydown = onKeyClick;
  }, [direction, setDirection]);

  useEffect(() => {
    setTimeout(() => moveSnake(snakes), speed);
  }, [snakes, speed]);

  useEffect(() => {
    if (isCollided(snakes)) {
      setGameOver(true);
      setDirection('');
    }
  }, [snakes]);

  return (
    <div>
      <Score score={score} />
      <div className='board'>
        {isGameOver ? (
          <GameOver finalScore={score} />
        ) : (
          <>
            <Snake snakePos={snakes} />
            <Food foodPos={food} />
          </>
        )}
      </div>
    </div>
  );
};

export default Game;
