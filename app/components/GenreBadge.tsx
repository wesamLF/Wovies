"use client"


import { useRouter } from 'next/navigation'

const GenreBadge = ({genre}: {genre : string | undefined}) => {
    if (!genre) return
        const router = useRouter()
    return (
        <div
             onClick={(e) => {
                e.stopPropagation();       
                e.preventDefault();        
                router.push(`/movies/search?genre=${genre}`);
            }}
            className="text-sm badge badge-soft badge-secondary hover:badge-dash z-50">
            {genre}
        </div>

    )
}

export default GenreBadge