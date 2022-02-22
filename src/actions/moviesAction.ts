import { fetchMovies } from '../helpers/Fetch';
import { AppDispatch } from '../store/store';
import { types } from '../types/types';
import { Response, Search, Resultado } from '../interface/response';
import { setMessage, loading, loaded } from './uiActions';
import Swal from 'sweetalert2';

export const getMovies = (title: string, year?: number, type?: 'movie' | 'series' | 'episode', page?: number) => async (dispatch: AppDispatch) => {

    let url = `movies?title=${title}${year ? `&year=${year}` : ''}${type ? `&type=${type}` : ''}${page ? `&page=${page}` : '&page=1'}`
    
    try {

        dispatch(loading())
        const resp = await fetchMovies(url)
        const { exitoso, resultado, mensaje }: Response = await resp.json()



        if (exitoso) {

            const {totalPage, Search} = resultado
            dispatch(setMovies({totalPage, Search}))

            dispatch(loaded())
        } else {
            dispatch(setMessage(mensaje))
            dispatch(loaded())
            return Swal.fire('Error', mensaje, 'error')

        }

    } catch (error: any) {
        console.log(error)
        dispatch(loaded())
        return Swal.fire('Error', error.msg, 'error')
    }

}


const setMovies = (movies: Resultado) => ({ type: types.setMovies, payload: movies })

