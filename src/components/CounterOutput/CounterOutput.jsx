import React from 'react';
import './CounterOutput.css';


const CounterOutput = (props) =>(
    <div className="Counteroutput">
        Counter Output:{props.value}
    </div>
)
export default CounterOutput;