import React from 'react';

interface ISnakeProps {
  snakePos: number[][];
}

const Snake = ({ snakePos }: ISnakeProps) => {
  return (
    <div>
      {snakePos.map((pos, index) => {
        const style = {
          left: `${pos[0]}%`,
          top: `${pos[1]}%`,
        };
        return index === snakePos.length - 1 ? (
          <div key={index} className='snake-head' style={style}></div>
        ) : (
          <div key={index} className='snake' style={style}></div>
        );
      })}
    </div>
  );
};

export default Snake;
