


export default (state = [], action) => {
   
    switch(action.type) {
        case 'GET_WINES_SUCCESS':
        return action.wines;

        case 'CREATE_WINE_SUCCESS':
        return state.concat(action.wine);

        case 'DELETE_WINE_SUCCESS':
       return state.filter(wine => wine.id !== action.wineId)
       

        case 'UPDATE_LIKE':
        let idx = state.findIndex((wine) => {return action.wine.id === wine.id})
       let newState = [...state.slice(0,idx), action.wine, ...state.slice(idx+1,state.length+1)]

       

      return newState

       

        default:
        return state;
    }
}
