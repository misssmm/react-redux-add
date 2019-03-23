export default (state,action)=>{
    if(state==undefined){
        return {
            "v":2,
            "a":1
        }
    }

    switch(action.type){
        case "ADD":
            return {...state,"v":state.v+1}
            break;
        case "REDUCE":
            return {...state,"v":state.v-1}
            break;
        case "ADDNUM":
            return {...state,"v":state.v+action.num}
            break;
    }

    return state
}