
const MetacriticButton = ({ ratting, url }: { ratting: string, url: string }) => {
    return (
        <a target="_blank"
            rel="noopener noreferrer"
            href={url} className="flex items-center gap-2 px-4 py-2 rounded-md bg-black text-white font-semibold">
            <span className="font-bold">Metacritic</span>
            <span className="bg-[#FCCA3F] text-black px-2 py-0.5 rounded text-sm font-bold">
                {ratting}
            </span>
        </a >

    )
}

export default MetacriticButton