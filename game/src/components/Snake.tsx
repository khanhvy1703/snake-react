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
        return <div key={index} className='snake' style={style}></div>;
      })}
    </div>
  );
};

export default Snake;
