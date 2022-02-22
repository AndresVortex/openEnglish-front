
export interface Response {
    exitoso:   boolean;
    codigo:    number;
    mensaje:   string;
    resultado: Resultado;
    novedad:   null;
}

export interface Resultado {
    Search:        Search[];
    totalResults?:  string;
    Response?:      string;
    exitoso?:       boolean;
    elementInPage?: number;
    totalPage?:     number;
}

export interface Search {
    Title:  string;
    Year:   string;
    imdbID: string;
    Type:   Type;
    Poster: string;
}

export enum Type {
    Movie = "movie",
}


export interface Filter {
    title: string,
    year?: number,
    type?: string,
    page?: number 
}