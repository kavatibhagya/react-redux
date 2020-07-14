import * as actionTypes from '../actions';
const initialState = {
    counter:0
}

const reducer = (state=initialState,action) =>{
switch(action.type){
    case actionTypes.INCREMENT:{
        return{
            ...state,
            counter:state.counter+1
        }

    }
    case actionTypes.DECREMENT:{
        return{
            ...state,
            counter:state.counter-1
        }

    }
    case actionTypes.ADDITION:{
        return{
            ...state,
            counter:state.counter+action.value
        }

    }
    case actionTypes.SUBTRACTION:{
        return{
            ...state,
            counter:state.counter-action.value
        }

    }

}


    //   if(action.type==='INCREMENT'){
    //       return{
    //           ...state,
    //           counter:state.counter+1
    //       }
    //   }
    //   if(action.type==='DECREMENT'){
    //     return{
    //         ...state,
    //         counter:state.counter-1
    //     }
    // }
    // if(action.type==='ADDITION'){
    //     return{
    //         ...state,
    //         counter:state.counter+action.value
    //     }
    // }
    // if(action.type==='SUBTRACTION'){
    //     return{
    //         ...state,
    //         counter:state.counter-action.value
    //     }
    // }
      return state;


}

export default reducer; 