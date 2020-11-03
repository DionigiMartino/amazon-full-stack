// Created the basket Array

export const initialState = {
    basket: []
};

// Selector

export const getBasketTotal = basket => {
    return basket?.reduce((amount, item) => item.price + amount, 0)
}

export const getBasketList = basket => {
    return basket?.map(product => product)
}

const reducer = (state, action) => {
    console.log(action)
    switch(action.type){
        case 'ADD_TO_BASKET':
            return {
                // Copy of the previous state
                ...state, 
                // Copy of the state and adding the item
                basket: [...state.basket, action.item]
            };
        case 'REMOVE_FROM_BASKET':
            const index = state.basket.findIndex(
                (basketItem) => basketItem.id === action.id
            );

            /*
                Taking the index from the basket, 
                looking if the basketItem.id match the
                action.id i passed in
            */

            let newBasket = [...state.basket];

            // Creating a copy of the basket 

            if(index >= 0){
                newBasket.splice(index, 1);
            } else {
                console.warn("Can't remove product" + action.id) 
            }

            return {
                // take the state
                ...state,
                // Making the old basket merging with the new one
                basket: newBasket
            };
        default:
            return state;
    }
}

export default reducer;