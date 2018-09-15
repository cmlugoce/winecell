import { resetWineForm } from './wineForm';
///////// Actions Creators ////////

const setWines = wines => {
    return {
        type: 'GET_WINES_SUCCESS', 
        wines
    }
}

const addWine = wine => {
   return {
       type: 'CREATE_WINE_SUCCESS',
       wine
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

export const createWine = wine => {
  
    return dispatch => {
        return fetch('http://localhost:3001/api/wines', {
            method: "POST",
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify({wine})
        })
         .then(response => response.json())
         .then(wine => {
             dispatch(addWine(wine))
             dispatch(resetWineForm())
         })
         
         .catch(error => console.log(error));
    }
}