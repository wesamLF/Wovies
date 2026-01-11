import React from 'react'

const TmdbButton = ({ tmdb_id }: { tmdb_id: number }) => {

    return (
        <a
            href={`https://www.themoviedb.org/person/${tmdb_id}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-[#01B4E4] px-4 py-2
         font-semibold text-[#0D253F]
         transition hover:-translate-y-0.5 hover:shadow-lg
         hover:shadow-[#01B4E4]/40"
        >
            TMDB
        </a>

    )
}

export default TmdbButton