import React from "react";

interface IFoodProps {
  foodPos: number[];
}
const Food = ({foodPos}: IFoodProps) => {
  const style = {
    left: `${foodPos[0]}%`,
    top: `${foodPos[1]}%`,
  }
  return (
    <div className='food' style={style} ></div>
  )
}

export default Food;