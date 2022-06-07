import React from 'react';

interface IScoreProps {
  score: number;
}

const Score = ({ score }: IScoreProps) => {
  return (
    <div>
      <p>{`YOUR SCORE: ${score}`}</p>
    </div>
  );
};

export default Score;