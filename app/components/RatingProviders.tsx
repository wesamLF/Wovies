// import React from 'react'
// import Imdb_button from './Imdb_button';
// import RottenTomatoesButton from './RottenTomatoesButton';
// import MetacriticButton from './MetacriticButton';
// import type { OmdbRating } from '../types/omdbRating';
// import { getRatingLinks } from '../util/getRatingLinks';





// const RatingProviders = async ({ imdb_id, movieName }: { imdb_id: string, movieName: string }) => {
// console.log(imdb_id,movieName )
//     const res = await fetch(`http://www.omdbapi.com/?i=${imdb_id}&apikey=${process.env.OMDB_API_KEY}`,  {
//             next: { revalidate: 86400 }, // cache for 24 hours
//         })

//     if (!res.ok) {
//         throw new Error("Failed to fetch movie");
//     }
//     const result = await res.json()
//     const Ratings: OmdbRating[] | [] = result?.Ratings;

//     const urls = getRatingLinks(imdb_id, movieName)



//     return (
//         <div className=" flex gap-2 flex-wrap">
//             {Ratings?.map((r) => {
//                 if (r.Source == "Internet Movie Database") return <Imdb_button key={r.Source} ratting={r.Value} url={urls.imdb} />
//                 if (r.Source == "Rotten Tomatoes") return <RottenTomatoesButton key={r.Source} ratting={r.Value} url={urls.rottenTomatoes} />
//                 if (r.Source == "Metacritic") return <MetacriticButton key={r.Source} ratting={r.Value} url={urls.metacritic} />
//                 return ""
//             })}

//         </div>
//     )
// }

// export default RatingProviders