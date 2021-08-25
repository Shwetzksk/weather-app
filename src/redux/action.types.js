const actionTypes = {
    'TODAY_WEATHER': 'STORE_TODAY_WEATHER_DATA',
    'FUTURE_WEATHER': 'STORE_FUTURE_WEATHER_DATA',
    change: {
        'CHANGE_TO_FAHRENHEIT': 'CHANGE_TO_FAHRENHEIT',
        'CHANGE_TO_CELSIUS':'CHANGE_TO_CELSIUS'
    },
    location: {
        'STORE_LOCATION': 'STORE_LOCATION',
        'STORE_GEO_LOCATION': 'STORE_GEO_LOCATION'
    },
    load: {
        'LOADING': 'LOADING',
        'LOADED': 'LOADED',
        'LOAD_ERROR': 'LOAD_ERROR',
        'LOAD_ERROR_RESOLVED': 'LOAD_ERROR_RESOLVED',
    },
    search: {
        'SEARCH_LOADING': 'SEARCH_LOADING',
        'SEARCH_LOADED': 'SEARCH_LOADED',  
        'SEARCH_LOAD_ERROR': 'SEARCH_LOAD_ERROR',    
        'SEARCH_LOAD_ERROR_RESOLVED': 'SEARCH_LOAD_ERROR_RESOLVED' 
    },
    
    
}

export default actionTypes;