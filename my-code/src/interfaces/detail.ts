interface Ratings {
    Source: string;
    Value: string;
}

export interface MovieData {
    Title: string;
    Year: string;
    Rated: string;
    Runtime: string;
    Plot: string;
    Actors: string;
    Genre: string;
    Director: string;
    Ratings: Ratings[];
    Poster: string;
}