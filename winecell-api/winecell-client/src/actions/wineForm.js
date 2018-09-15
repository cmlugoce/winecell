

//////// Action Creators ////////

export const updateWineFormData = wineFormData => {
    return {
        type: 'UPDATED_DATA',
        wineFormData

    }
}

export const resetWineForm = () => {
    return {
        type: 'RESET_WINE_FORM'
    }
}