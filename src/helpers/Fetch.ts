import { Response, Resultado } from '../interface/response';

export const getMovies = async (title: string, year: number, type: 'movie' | 'series' | 'episode', page?: number) => {

    const url = `http://localhost:3000/movies?title=${title}&year=${year}&type=${type}&page=${page}`
    
    try {
        
        const resp = await fetch(url)

        let { exitoso, resultado }: Response = await resp.json()
        
        if (exitoso) {
            

            return resultado
        } else {
            return []
        }

    } catch (error: any) {
        console.log(error)
    }

}

