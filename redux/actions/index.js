import {MY_VALUE} from "../actionTypes";

export const val = value => ({
    type: MY_VALUE, 
    payload: {
        show: value
    }
})