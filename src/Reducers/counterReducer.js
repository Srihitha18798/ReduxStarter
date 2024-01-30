const initialState={count:0}; //initial state of count to be passes to reducer

const counterReducer=(state=initialState,action)=>{
    switch(action.type){
        case "INCREMENT":
            return Object.assign({},state,{count:state.count+action.payload.data});
        case "DECREMENT":
            return Object.assign({},state,{count:state.count-action.payload.data});
        default:
            return state;
    }
}
export default counterReducer