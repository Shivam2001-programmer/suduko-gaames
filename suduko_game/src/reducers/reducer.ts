import { AnyAction } from "redux";

const initialState =();

function reducer(state = initialStata, action: AnyAction){
switch(action.type){
    case types.CREATE_GRID:
        return(
            ...state,
            grid:createfullGrid
        )
    default:
        return state
}
}

export default reducer