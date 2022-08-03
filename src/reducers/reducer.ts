import { actionTypes, typeState, typeAction } from '../types';

const initialState: typeState = {
    content: [],
    request: "a",
    idCard: 0,
    paginator: 1,
    error: false
}

export const reducer = (state = initialState, action: typeAction): typeState => {
    switch (action.type) {
        case actionTypes.SET_REQUEST:
            return {
                ...state,
                request: action.payload
            };
        case actionTypes.SET_CONTENT:
            return {
                ...state,
                content: action.payload,
            };
        case actionTypes.SET_ID_CARD:
            return {
                ...state,
                idCard: action.payload,
            };
        case actionTypes.UP_PAGINATOR:
            return {
                ...state,
                paginator: state.paginator + 1,
            };
        case actionTypes.LOWER_PAGINATOR:
            return {
                ...state,
                paginator: state.paginator - 1,
            };
        case actionTypes.ON_ERROR:
            return {
                ...state,
                error: true
            };
        default:
            return state;
    }
}