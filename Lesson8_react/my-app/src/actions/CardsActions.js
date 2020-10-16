import axios from 'axios'

export const GET_CARDS_REQUEST = 'GET_CARDS_REQUEST'
export const GET_CARDS_SUCCESS = 'GET_CARDS_SUCCESS'
export const GET_CARDS_ERROR = 'GET_CARDS_ERROR'

export default function getCards(API) {
    return dispatch => {
        dispatch(addCardsStarted());

        axios
            .get(API)
            .then(res => {
                console.log(res)
                dispatch(addCardsSuccess(res.data));
            })
            .catch(err => {
                dispatch(addCardsError(err.message));
            })
    }
}

const addCardsStarted = () => ({
    type: GET_CARDS_REQUEST
})

const addCardsSuccess = cards => ({
    type: GET_CARDS_SUCCESS,
    payload: cards,
})

const addCardsError = error => ({
    type: GET_CARDS_ERROR,
    payload: {error}
})