import { MY_VALUE } from "../actionTypes"

const initialState = {
    value: []
}

export default function(state = initialState, action){
    switch (action.type){
        case MY_VALUE:{
            const {show} = action.payload
            return{
                ...state, 
                value: [...state.value , show]
            }
        }
        default:
            return state;
    }
}