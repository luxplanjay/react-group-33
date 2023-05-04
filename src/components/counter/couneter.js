import React from 'react';
import{CounterWrapper, CounterValue, CounterControls, CounterButton} from "./counter.styled.jsx"
// import { set } from 'date-fns';


// Это через функцию повешели

// class Counter extends React.Component {
// render (){
// return(
// <CounterWrapper className="Counter">
// <CounterValue className="Counter__value">0</CounterValue>

// <CounterControls className="Counter__controls">
// <CounterButton type="button" className="Counter__ad" onClick={()=>{console.log("клик увеличить")}}>Увеличить на 1</CounterButton>
// <CounterButton type="button" className="Counter__deduct" onClick={()=>{console.log("клик уменьшить")}}>Уменшить на 1</CounterButton>
// </CounterControls>


// </CounterWrapper>
// )
// }



// }

// export default Counter

class Counter extends React.Component {
// constructor(){
// super();
// this.state ={
//     value:5
// }
// }

state ={value:5};

handleIncrement = (event) => {


    // Если меняем что то 1 раз , передаём обьект. 
// this.setState({value:10})

// this.setState(prevState => {return {value:prevState.value+1}})
// Идентичная запись короче
this.setState(prevState => ({value:prevState.value+1}))

    console.log("кликнули на увеличить");
         
}

handleDecrement = (event) => {
  
this.setState(prevState => ({value: prevState.value - 1}))

    console.log("кликнули на уменьшить");
         
}




    render (){
    return(
    <CounterWrapper className="Counter">
    <CounterValue className="Counter__value">{this.state.value}</CounterValue>
    
    <CounterControls className="Counter__controls">
    <CounterButton type="button" className="Counter__ad" onClick={this.handleIncrement}>Увеличить на 1</CounterButton>
    <CounterButton type="button" className="Counter__deduct" onClick={this.handleDecrement}>Уменшить на 1</CounterButton>
    </CounterControls>
    
    
    </CounterWrapper>
    )
    }
    
    
    
    }
    
    export default Counter