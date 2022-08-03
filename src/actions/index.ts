interface Content {
    name: string,
    tagline: string,
    description: string,
    descriptionSmall: string,
    img: string | null,
    abv: string,
    foodPairing: string,
    id: number,
}

const selectBut = (id: number) => {
    return {
        type: 'SELECT_BUTTONS',
        payload: id
    }
}

const setRequest = (id: number | string) => {
    return {
        type: 'SET_REQUEST',
        payload: id
    }
}

const setContent = (id: Content[]) => {
    return {
        type: 'SET_CONTENT',
        payload: id,
    }
}

const setCard = (id: number) => {
    return {
        type: 'SET_ID_CARD',
        payload: id,
    }
}

const onError = () => {
    return {
        type: 'ON_ERROR'
    }
}


export {
    selectBut,
    setRequest,
    setContent,
    setCard,
    onError
};