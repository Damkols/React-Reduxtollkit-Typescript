import React from "react";
// import { useDispatch, useSelector } from "react-redux";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { ordered, restocked } from "../features/cake/cakeSlice";

const CakeContainer = () => {
  const numOfCakes = useAppSelector((state) => state.cake.numOfCakes);
  const dispatch = useAppDispatch();
  return (
    <div>
      <h1>Cake Container</h1>
      <h2>Number of cakes: {numOfCakes}</h2>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order cakes
      </button>
      <button
        onClick={() => {
          dispatch(restocked(5));
        }}
      >
        restock cakes
      </button>
    </div>
  );
};

export default CakeContainer;
