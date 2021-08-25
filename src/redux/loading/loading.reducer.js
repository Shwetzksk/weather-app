export function loadingReducer(state = true, action) {
    
    switch (action.type) {
        case 'LOADING':
            return true;
        case 'LOADED':
            return false;
        case 'SEARCH_LOADING':
            return true;
        case 'SEARCH_LOADED':
            return false;
        default:
            return state;
    }
}

export function loadingErrorReducer(state = {status:false,messaged:''}, action) {
    
    switch (action.type) {
        case 'LOAD_ERROR':
            return {status:true,message:action.payload};
        case 'SEARCH_LOAD_ERROR':
            return {status:true,message:action.payload};
        case 'LOAD_ERROR_RESOLVED':
            return {status:false,message:action.payload};
        case 'SEARCH_LOAD_ERROR_RESOLVED':
            return {status:false,message:action.payload};
        default:
            return state;
    }
}