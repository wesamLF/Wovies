'use client'

import { useEffect, useState } from "react";
import type { MovieDetails } from "../types/movie";

const AddToFavBtn = ({ movie }: { movie: MovieDetails }) => {

    const [movieInFav, setMovieInFav] = useState(false)
    const [myFavMovies, setMyFavMovies] = useState<any[]>([])

    useEffect(() => {
        const stored = localStorage.getItem("myfav")

        const favs = stored ? JSON.parse(stored) : []

        setMyFavMovies(favs)
        setMovieInFav(favs.some((fa: { id: number }) => fa.id === movie.id))
    }, [movie.id])

    const handleAdd = (e: React.FormEvent) => {
        e.preventDefault()

        if (movieInFav) {
            const filtered = myFavMovies.filter(
                (m: { id: number }) => m.id !== movie.id
            )

            localStorage.setItem("myfav", JSON.stringify(filtered))
            setMyFavMovies(filtered)
            setMovieInFav(false)
        } else {
            const updated = [
                ...myFavMovies,
                {
                    id: movie.id,
                    title: movie.title,
                    poster_path: movie.poster_path,
                    backdrop_path: movie.backdrop_path,
                    genre_ids: [],
                },
            ]

            localStorage.setItem("myfav", JSON.stringify(updated))
            setMyFavMovies(updated)
            setMovieInFav(true)
        }
    }


    return (
        <button onClick={handleAdd}
            className={` cursor-pointer relative flex justify-center items-center group`}>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                className={`h-20 w-20  group-hover:opacity-95 ${movieInFav ? "  fill-current text-info " : " fill-current text-white"}`}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
            </svg>
            {movieInFav ?
                <div className=" absolute  text-primary-content text-4xl font-bold ">★</div> :
                <div className=" absolute  text-primary-content text-4xl font-bold ">+</div>
            }


        </button>
    )
}

export default AddToFavBtn