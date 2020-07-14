import React ,{Component} from 'react';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';

class Counter extends Component{

    render(){
        return (
            <>
              <CounterOutput value={10}/>
              <CounterControl label="INCREMENT" />
              <CounterControl label="DECREMENT"/>
              <CounterControl label="ADD-10"/>
              <CounterControl label="SUB-5"/>
              
            </>
        )
    }
}
export default Counter;