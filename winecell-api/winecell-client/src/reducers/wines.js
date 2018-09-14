


export default (state = [], action) => {
   
    switch(action.type) {
        case 'GET_WINES_SUCCESS':
        return action.wines;

        case 'CREATE_WINE_SUCCESS':
        return state.concat(action.wine);

        default:
        return state;
    }
}
