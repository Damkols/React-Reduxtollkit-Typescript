import React from "react";
import { ordered, restocked } from "../features/pepsi/pepsiSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

const PepsiContainer = () => {
  const numOfPepsi = useAppSelector((state) => state.pepsi.numOfPepsi);
  const dispatch = useAppDispatch();

  return (
    <div>
      <h1>Number of Pepsi {numOfPepsi}</h1>
      <button
        onClick={() => {
          dispatch(ordered());
        }}
      >
        Order pepsi
      </button>
      <button
        onClick={() => {
          dispatch(restocked(10));
        }}
      >
        restock pepsi
      </button>
    </div>
  );
};

export default PepsiContainer;
