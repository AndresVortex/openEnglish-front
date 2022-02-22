import { fetchMovies } from '../helpers/Fetch';
import { types } from '../types/types';





export const setMessage = (msg: string) => ({ type: types.setMessage, payload: msg })

export const loading = () => ({ type: types.loading })
export const loaded = () => ({ type: types.loaded })
export const setError = (error: boolean) => ({ type: types.setError, payload: error })


export const searchMoviesTypes = () => async() => {

    try {
        const url = 'movies/t'
        const resp = await fetchMovies(url)

        console.log(resp)

    } catch (error) {
        console.log(error)
    }
}