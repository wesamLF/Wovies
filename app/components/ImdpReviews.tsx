import SectionTitle from "./SectionTitle";


type reviewType = {
    author: string;
    author_details: {
        rating: number | null;
        avatar_path: string | null
    }
    content: string;
    created_at: string;
    url: string
}

const ImdpReviews = async ({ movie_id }: { movie_id: number }) => {

    const res = await fetch(
        `https://api.themoviedb.org/3/movie/${movie_id}/reviews?api_key=${process.env.TMDB_API_KEY}&language=en-US&page=1`
    );
    const data = await res.json();
    if (!res.ok) {
        return
    }
    const reviews: reviewType[] = data?.results?.slice(0, 6)?? []



    return (
        <>
            {
                reviews.length != 0 &&
                <div className="my-16 py-12 px-6 bg-base-200 rounded-4xl ">

                    <SectionTitle title={"TMDP Top Reviews:"} />
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6  pt-6">

                        {reviews.map((review, index) => (
                            <a href={review.url} key={index} target="_blank" >

                                <div className="card bg-neutral hover:bg-base-300 shadow">
                                    <div className="card-body">
                                        <div className="flex items-center justify-between flex-wrap" >
                                            <h3 className="font-semibold text-xl overflow-hidden">{review.author}</h3>
                                            <div className="">
                                                <div className="rating rating-sm ">
                                                    {review.author_details.rating != null &&

                                                        Array.from({ length: 5 }).map((_, i) => (

                                                            <input
                                                                key={i}
                                                                type="radio"
                                                                className="mask mask-star-2 bg-yellow-400 cursor-default"
                                                                checked={i < Math.round(review.author_details.rating as number / 2)}
                                                                readOnly
                                                            />

                                                        ))

                                                    }

                                                </div>


                                            </div>

                                        </div>

                                        {/* Clamped text to prevent layout break */}
                                        <p className="line-clamp-2 text-neutral-content ">
                                            {review.content}
                                        </p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>

                </div>
            }
        </>
    )
}

export default ImdpReviews