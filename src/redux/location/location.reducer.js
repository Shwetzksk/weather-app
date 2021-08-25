

export function storeLocationReducer(state = '', action) {
    switch (action.type) {
        case 'STORE_LOCATION':
            return action.payload;
        default:
            return state;
    }
}

export function storeGeoLocationReducer(state = { lat: '', long: '' },action) {
    switch (action.type) {
        case 'STORE_GEO_LOCATION':
            return { ...action.payload };
        default:
            return state
    }
}