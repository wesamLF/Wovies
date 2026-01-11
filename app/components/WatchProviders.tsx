import Link from 'next/link';



 type ProviderType = {
    provider_name:string ;
}

const WatchProviders = async ({ movie_id }: { movie_id: number }) => {


    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}/watch/providers?api_key=${process.env.TMDB_API_KEY}`, {
        cache: "no-store"
    }
    )


    if (!res.ok) {
        throw new Error("Failed to fetch movie");
    }

    const { results } = await res.json()
    const providers: ProviderType[] = results["US"]?.buy
    const link = results["US"]?.link

    if (!link || !providers) return



    return (


        <div className="flex gap-4 flex-wrap items-center">
            <span className='text-3xl font-bold text-primary '> Where to watch:</span>
            <div className="flex gap-3 flex-wrap ">
                {providers.map((p, i) => (
                    <a href={`${link}`} key={i} target='_blank'>
                        <div className="badge badge-outline badge-lg rounded-full cursor-pointer hover:badge-accent ">{p.provider_name}</div>
                    </a>
                ))}

            </div>                  
              </div>


    )
}

export default WatchProviders