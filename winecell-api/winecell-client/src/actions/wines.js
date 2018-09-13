
///////// Actions Creators ////////

const setWines = wines => {
    return {
        type: 'GET_WINES_SUCCESS', 
        wines
    }
}




//////// Async Actions /////////

export const getWines = () => {

  return dispatch => {
      return fetch('http://localhost:3001/api/wines')
      .then(response => response.json())
      .then(wines => dispatch(setWines(wines)))
      .catch(error => console.log(error));
  }
    
}
