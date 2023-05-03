import React from 'react';
import{CounterWrapper, CounterValue, CounterControls, CounterButton} from "./counter.styled.jsx"

class Counter extends React.Component {
render (){
return(
<CounterWrapper className="Counter">
<CounterValue className="Counter__value">0</CounterValue>

<CounterControls className="Counter__controls">
<CounterButton type="button" className="Counter__ad">Увеличить на 1</CounterButton>
<CounterButton type="button" className="Counter__deduct">Уменшить на 1</CounterButton>
</CounterControls>


</CounterWrapper>
)
}



}

export default Counter