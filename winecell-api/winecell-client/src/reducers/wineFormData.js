export default (state = {
    name: '',
    description: '',
    wine_type: '',
    image: '',
    year: 0,
    price: 0
}, action) => {

    switch(action.type) {
        case 'UPDATED_DATA':
        return action.wineFormData

        default:
        return state;
    }
}