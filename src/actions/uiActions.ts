import { fetchMovies } from '../helpers/Fetch';
import { types } from '../types/types';
import { AppDispatch } from '../store/store';





export const setMessage = (msg: string) => ({ type: types.setMessage, payload: msg })

export const loading = () => ({ type: types.loading })
export const loaded = () => ({ type: types.loaded })
export const setError = (error: boolean) => ({ type: types.setError, payload: error })


export const searchMoviesTypes = () => async(dispatch: AppDispatch) => {

    try {
        const url = ''
        const resp = await fetchMovies(url, {}, 'POST')
        const {resultado} = await resp.json()

        if (resultado) {
            dispatch(changeFirstTime())
        }
        dispatch(changeFirstTime())
        

    } catch (error) {
        console.log(error)
    }
}


const changeFirstTime = () => ({type: types.changeFirsTime})