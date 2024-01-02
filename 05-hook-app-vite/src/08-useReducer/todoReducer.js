



export const todoReducer = (initialState =[], action) => {
    switch (action.type) {
        case '[TODO] Add Todo':
            return [ ...initialState, action.payload];
        case '[TODO] Add Todo2':
           throw new Error('Action.type: ABC no está implementada');
            
        default:
            return initialState;
    }
}