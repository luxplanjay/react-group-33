import React from "react";
import {
    CounterWrapper,
    CounterValue,
    CounterControls,
    CounterButton,
  } from './counter.styled.jsx';


// Для того, чтобы получить доступ к This,ступную в родительском файле
// 1. передаём в пропсы знаячение , которое будем получать с родительского , обьект value
// 2. так как он ренедерится у нас, передаём его туда тоже <CounterValue className='Counter__value'>{this.state.value}</CounterValue> меняется на
        //  <CounterValue className='Counter__value'>{value}</CounterValue> 
        //  3. В родительском элементе присваиваем этому value={this.state.value} при вызове <Value/>  => <Value  value={this.state.value}/>

  const Value = ({value}) => 

  <CounterValue className='Counter__value'>
          {value}
        </CounterValue>

        export default Value