export enum actionTypes {
    SET_REQUEST = "SET_REQUEST",
    SET_CONTENT = "SET_CONTENT",
    SET_ID_CARD = "SET_ID_CARD",
    UP_PAGINATOR = "UP_PAGINATOR",
    LOWER_PAGINATOR = "LOWER_PAGINATOR",
    ON_ERROR = "ON_ERROR"
}

export interface Content {
    name: string,
    tagline: string,
    description: string,
    descriptionSmall: string,
    img: string | null,
    abv: string,
    foodPairing: string,
    id: number,
}

export interface typeState {
    content: Content[];
    request: string | number;
    idCard: number;
    paginator: number;
    error: boolean | null;
}

export type typeAction = SetRequest | SetContent | OnError | SetIdCard | UpPaginator | LowerPaginator

interface SetRequest {
    type: actionTypes.SET_REQUEST;
    payload: number | string;
}

interface SetContent {
    type: actionTypes.SET_CONTENT;
    payload: Content[];
}

interface SetIdCard {
    type: actionTypes.SET_ID_CARD;
    payload: number;
}

interface UpPaginator {
    type: actionTypes.UP_PAGINATOR;
}

interface LowerPaginator {
    type: actionTypes.LOWER_PAGINATOR;
}

interface OnError {
    type: actionTypes.ON_ERROR;
}