import { CART_ADD_ITEM } from "../constants/cartConstants";

export const cartReducer = (state = { cartItems:[] }, action) =>{
    switch(action.type){
        case CART_ADD_ITEM:
            const item = action.payload;
            /* check if item already exists in cart */
            const existItem = state.cartItems.find(x => x.product === item.product);
            if(existItem){
                /* ...state mean it wont change other properties just cart items */
                return {
                    ...state,
                    cartItems:state.cartItems.map( x => x.product === existItem.product? item: x)
                };
            }else{
                /* doesn't change state but changes cart items by adding new item */
                return { ...state, cartItems: [...state.cartItems, item] };
            }
        default:
            return state;

    }
};