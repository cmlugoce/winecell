const initialState = {
name: '',
description: '',
wine_type: '',
image: '',
year: 0,
price: 0
}

export default (state = initialState,
     action) => {

    switch(action.type) {
        case 'UPDATED_DATA':
        return action.wineFormData;

        case 'RESET_WINE_FORM':
        return initialState;

        default:
        return state;
    }
}