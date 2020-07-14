const initialState = {
    counter:0
}

const reducer = (state=initialState,action) =>{
      if(action==='INCREMENT'){
          return{
              ...state,
              counter:state.counter+action.value
          }
      }


}

export default reducer; 