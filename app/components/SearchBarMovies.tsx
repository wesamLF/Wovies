"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";



const SearchBarMovies = () => {

    const router = useRouter();
    const [query, setQuery] = useState("");
    const [genre, setGenre] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams();

        if (query) params.set("query", query);
        if (genre) params.set("genre", genre);

        router.push(`/movies/search?${params.toString()}`);
    };



    return (
        <>
            <form className="flex flex-col-reverse  md:flex-row gap-3 items-center justify-center w-full">
                <select
                    className="select select-bordered"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                >
                    <option value="">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Animation">Animation</option>
                    <option value="Comedy">Comedy</option>
                    <option value="Crime">Crime</option>
                    <option value="Documentary">Documentary</option>
                    <option value="Drama">Drama</option>
                    <option value="Family">Family</option>
                    <option value="Fantasy">Fantasy</option>
                    <option value="History">History</option>
                    <option value="Horror">Horror</option>
                    <option value="Music">Music</option>
                    <option value="Mystery">Mystery</option>
                    <option value="Romance">Romance</option>
                    <option value="Science Fiction">Science Fiction</option>
                    <option value="TV Movie">TV Movie</option>
                    <option value="Thriller">Thriller</option>
                </select>
                <input
                    type="text"
                    placeholder="Search movies..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="input input-bordered sm:w-[550px]"
                />



                <button className="btn btn-primary" type="submit" onClick={handleSearch}>
                    Search
                </button>

            </form>

        </>

    )
}

export default SearchBarMovies