"use client"

import { useRouter } from "next/navigation";
import { useState } from "react";



const SearchBarActors = () => {

    const router = useRouter();
    const [query, setQuery] = useState("");

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams();

        if (query) params.set("query", query);

        router.push(`/actors/search?${params.toString()}`);
    };

   

    return (
        <>
            <form className="flex flex-col-reverse  md:flex-row gap-3 items-center justify-center w-full">
               
                <input
                    type="text"
                    placeholder="Type an actor name..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="input input-bordered  sm:w-[550px]"
                />



                <button className="btn btn-primary" type="submit"  onClick={handleSearch}>
                    Search
                </button>
                
            </form>

        </>

    )
}

export default SearchBarActors