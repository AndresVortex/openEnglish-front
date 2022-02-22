import { types } from '../types/types';





export const setMessage = (msg: string) => ({ type: types.setMessage, payload: msg })

export const loading = () => ({ type: types.loading })
export const loaded = () => ({ type: types.loaded })
export const setError = (error: boolean) => ({ type: types.setError, payload: error })