import React from "react";
import {
    CounterWrapper,
    CounterValue,
    CounterControls,
    CounterButton,
  } from './counter.styled.jsx';


const Controls = ({onIncrement, onDecrement}) => (
    
    <CounterControls className='Counter__controls'>
      <CounterButton
        type='button'
        className='Counter__ad'
        onClick={onIncrement}
       
        // onClick={this.handleIncrement}  Вместо this поставили props
      >
        Увеличить на 1
      </CounterButton>
      <CounterButton
        type='button'
        className='Counter__deduct'
        onClick={onDecrement}

        // onClick={this.handleDecrement}
      >
        Уменшить на 1
      </CounterButton>
    </CounterControls>
 

)

export default Controls