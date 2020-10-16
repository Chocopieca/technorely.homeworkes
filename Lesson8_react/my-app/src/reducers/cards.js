import { GET_CARDS_REQUEST, GET_CARDS_SUCCESS, GET_CARDS_ERROR} from '../actions/CardsActions'

const initialState = {
    cards: [],
    isFetching: false,
    isError: null,
}

export default function cardsReducer(state = initialState, actions) {
    switch (actions.type) {
        case GET_CARDS_REQUEST:
            return { ...state, isFetching: true }

        case GET_CARDS_SUCCESS:
            return { ...state, cards: actions.payload, isFetching: false, isError: null }

        case GET_CARDS_ERROR:
            return { ...state, isFetching: false, isError: actions.payload.error}

        default:
            return state
    }
}