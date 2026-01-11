'use client'

import React, { useState } from 'react'
import { useRouter } from "next/navigation";


const Hero = () => {


    const router = useRouter();
    const [query, setQuery] = useState("");


    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();

        const params = new URLSearchParams();

        if (query) params.set("query", query);

        router.push(`/movies/search?${params.toString()}`);
    };





    return (
        <section className="relative h-screen  overflow-hidden  w-screen -mx-60">
            {/* Background Video */}
            <video
                autoPlay
                muted
                loop
                playsInline
                className="absolute inset-0 w-full h-full object-cover scale-110 blur-md"
            >
                <source src="/videos/movie-bg.mp4" type="video/mp4" />
            </video>

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/40" />

            {/* Content */}
            <div className="relative z-10 flex w-full h-full items-center justify-center px-6 ">
                <div className=" max-w-6xl space-y-6">
                    <div className="text-4xl md:text-8xl font-extrabold text-white">
                        <h1 className="">

                            Unlimited Movies
                        </h1>
                        <h1 className=" ">

                            TV Shows
                        </h1>
                        <h1 className=" ">

                            & More
                        </h1>
                    </div>


                    <p className="text-gray-300 text-lg md:text-xl">
                        Discover, search, and stream your favorite movies anytime, anywhere.
                    </p>

                    <form className="flex flex-col-reverse  md:flex-row gap-3 items-center justify-center w-full">

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

                </div>
            </div>
        </section>
    )
}

export default Hero