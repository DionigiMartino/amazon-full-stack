
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
        default:
            return state;
    }
}

export default reducer;