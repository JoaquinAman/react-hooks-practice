import React, { useEffect, useReducer, useState } from 'react'

function CounterWithReducer() {
  
  const initialState = 0 ; 

  // const action = {
  //   type: 'increase',
  //   type: 'add',
  //   user: { 
  //     name: 'John Smith',
  //     email: 'jsmith@mail.com'
  //   }
  // };
  const types = {
    increment:"increment",
    decrement:"decrement",
    reset:"reset",
  }

  const reducer = (state, action) => {
    switch (action.type) {
      case types.increment:
        return state + 1
        
      case types.decrement:
        return state - 1
        
      case types.reset:
        return state = 0
        
      default: state;
    }
  }

  const [counter, dispatch] = useReducer(reducer, initialState);
  // console.log(counter);  
  return (
    <div>
      <button onClick={() => dispatch({type:types.increment})}>
        Sum
      </button>
      <button onClick={() => dispatch({type:types.decrement})}>
        Rest
      </button>
      <button onClick={() => dispatch({type:types.reset})}>
        Reset to 0
      </button>
      <h1>{counter}</h1>
    </div>
  );

}

export default CounterWithReducer