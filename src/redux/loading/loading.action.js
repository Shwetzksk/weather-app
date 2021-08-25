import types from '../action.types';

export function loadingAction() {
    return {type:types.load.LOADING}
}
export function loadedAction() {
    return {type:types.load.LOADED}
}
export function loadErrorAction(message) {
    return {type:types.load.LOAD_ERROR, payload:message}
}
export function loadErrorResolvedAction() {
    return {type:types.load.LOAD_ERROR_RESOLVED, payload:''}
}


export function searchLoadingAction() {
    return {type:types.search.SEARCH_LOADING}
}
export function searchLoadedAction() {
    return {type:types.search.SEARCH_LOADED}
}
export function searchLoadErrorAction(message) {
    return {type:types.search.SEARCH_LOAD_ERROR,payload:message}
}
export function searchLoadErrorResolvedAction() {
    return {type:types.search.SEARCH_LOAD_ERROR_RESOLVED}
}