import { Action, ActionType, DataList } from '../actionTypes';

interface cartList extends DataList {
    quantity: number
}


interface State {
    cartItems: cartList[];
}

const initialState = {
    cartItems: [],
}

export const cartReducer = (state: State = initialState, action: Action) => {
    switch(action.type) {
        case ActionType.ADD_ITEM:
            return {

            } 
        case ActionType.GET_ALL_ITEMS:
            return {
                cartItems: action.payload
            }
        case ActionType.REMOVE_ITEM:
            return {

            }
        default: 
            return state;
    }
}