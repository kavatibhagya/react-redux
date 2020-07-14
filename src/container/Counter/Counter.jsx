import React ,{Component} from 'react';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import CounterControl from '../../components/CounterControl/CounterControl';
import {connect } from 'react-redux';
import * as actionTypes from "../../Store/actions";
    

class Counter extends Component{

    render(){
        return (
            <>
              <CounterOutput value={this.props.ctr}/>
              <CounterControl label="INCREMENT" clicked={this.props.onIncrementCounter}/>
              <CounterControl label="DECREMENT" clicked={this.props.onDecrementCounter}/>
              <CounterControl label="ADDITION" clicked={this.props.onAdditionCounter}/>
              <CounterControl label="SUBTRACTION" clicked={this.props.onSubtractionCounter}/>
              
            </>
        );
    }
}

const mapStatetoProps =  state =>{
    return{
       ctr:state.counter

    }
}
const mapDispatchtoProps = dispatch =>{
    return{
        onIncrementCounter: () => dispatch ({type:actionTypes.INCREMENT}),
        onDecrementCounter: () => dispatch ({type:actionTypes.DECREMENT}),
        onAdditionCounter: () => dispatch ({type:actionTypes.ADDITION, value:10} ),
        onSubtractionCounter: () => dispatch ({type:actionTypes.SUBTRACTION,value:5})
    }
}

export default connect(mapStatetoProps,mapDispatchtoProps) (Counter);