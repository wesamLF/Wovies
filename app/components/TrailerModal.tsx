"use client"

import { useState } from "react";



const TrailerModal = ({ videos }: { videos: any[] }) => {
    const [open, setOpen] = useState(false);

    const trailer = videos?.find(
        (v) => v.site === "YouTube" && v.type === "Trailer"
    );

    if (!trailer) return null;
    return (
        <>


            <button
                onClick={() => setOpen(true)}
                className=" w-15 h-15 xl:w-25 xl:h-25 bg-secondary opacity-50 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition cursor-pointer
                absolute top-1/2 left-1/2 
                      -translate-x-1/2 -translate-y-1/2
                ">
                <div className="w-0 h-0 
                border-b-12 border-t-12 border-l-20
      xl:border-l-50 border-l-white
    xl:border-t-30 border-t-transparent
    xl:border-b-30 border-b-transparent
      rotate-0">
                </div>
            </button>

            {open && (
                <div className="fixed inset-0 bg-black/60 flex justify-center items-center z-50">
                    <div className="bg-base-100 p-4 rounded-lg max-w-3xl w-full">
                        <iframe
                            src={`https://www.youtube.com/embed/${trailer.key}`}
                            width="100%"
                            height="400"
                            className="rounded-lg"
                            allowFullScreen
                        />

                        <button
                            className="btn btn-secondary mt-4"
                            onClick={() => setOpen(false)}
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}

export default TrailerModal