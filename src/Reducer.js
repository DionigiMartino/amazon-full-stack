export const initialState = {
    basket: []
};

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