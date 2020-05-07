import axios from 'axios';

const URL = 'http://localhost:3000/api/todos'

export const changeDescription = event => ({
    type: 'DESCRIPTION_CHANGED',
    payload: event.target.value
})

export const search = () => {
    const request = axios.get(`${URL}?sort=-createAt`)
    return {
        type: 'TODO_SEARCH',
        payload: request
    }
}

export const add = (description) => {
    const request = axios.post({URL, description})
    return [
        {type: 'TODO_ADDED', payload: request},
        search()
    ]
}