


export default (state = [], action) => {
   
    switch(action.type) {
        case 'GET_WINES_SUCCESS':
        return action.wines;

        default:
        return state;
    }
}
