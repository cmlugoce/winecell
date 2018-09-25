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

const updateLikes = wine => {
    return{
        type: 'UPDATE_LIKE',
        wine: wine
    }
}

const removeWine = wineId => {
    return{
        type: 'DELETE_WINE_SUCCESS',
        wineId: wineId
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
    console.log('C')
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
             console.log('D')
             dispatch(addWine(wine))
             dispatch(resetWineForm())
             //console.log('E')
             
         })
         
         .catch(error => console.log(error));
         
    }
    
}

export const addLike = (wine) => {
   
    return dispatch => {
      return fetch(`http://localhost:3001/api/wines/${wine.id}`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({wine})
      })
        .then(response => response.json())
        .then(wine=> dispatch(updateLikes(wine)))
        .catch(error => console.log(error))
    }
  }

  export const deleteWine = (id) => {
    return dispatch => {
      return fetch(`http://localhost:3001/api/wines/${id}`, {method: 'delete'})
        .then(dispatch(removeWine({id})))
        .catch(error => console.log(error))
    }
  }