const redux =require('redux');
const createStore = redux.createStore;
   
const initialstate = {
    counter:0
}


// defining reducer
const rootReducer = (state=initialstate,action) =>{
      if(action.type==='INC-COUNTER'){
          return {
              ...state,
              counter:state.counter+1
          }
      }
      if(action.type==='ADD-COUNTER'){
          return{
              ...state,
              counter:state.counter+action.value
          }
      }
      if(action.type==='DEC-COUNTER'){
          return {
              ...state,
              counter:state.counter-action.value
          }
      }


    return state;

}
// creating store
const store = createStore(rootReducer);
console.log(store.getState());


//subscription

store.subscribe(()=>{
    console.log("[subscription]::",store.getState());
})


//Actions

store.dispatch({type:'INC-COUNTER'});
console.log(store.getState());

store.dispatch({type:'ADD-COUNTER',value:10});
console.log(store.getState());

store.dispatch({type:'DEC-COUNTER' ,value:5});
console.log(store.getState());