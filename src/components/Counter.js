import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Increment, Decrement } from "../Actions/counterActions";


const Counter = () => {
  /*useSelector hook lets component extract pieces of data from Redux store state
   * Any time an action has been dispatched and the Redux store has been updated,
   * useSelector will re-run the selector function. If the selector returns
   * a new value, useSelector will re-render component with the new value.
   */
  const count = useSelector(state=>state.counterReducer.count);

  /**
   * useDispatch hook provides actual dispatch method from the Redux store.
   */
  const dispatch = useDispatch(); // connect to store's dispatcher

  return (
    <React.Fragment>
      <header className="m-1 border border-dark rounded">
        <h1 className="text-center text-primary">Redux Demo</h1>
      </header>
      <section className="m-1 border border-dark rounded">
        <p className="m-2 lead">Value from store: {count}</p>
        <button
          className="btn btn-success btn-sm m-2"
          onClick={() => {
            dispatch(Increment(1));
            //dispatch Decrement action here
          }}
        >
          Increment
        </button>
        <button
          className="btn btn-warning btn-sm"
          onClick={() => {
            dispatch(Decrement(1));
            //dispatch Decrement action here
          }}
        >
          Decrement
        </button>
      </section>
    </React.Fragment>
  );
};

export default Counter;
