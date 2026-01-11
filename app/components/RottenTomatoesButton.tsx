
const RottenTomatoesButton = ({ ratting, url }: { ratting: string, url: string }) => {
    return (
        <a target="_blank"
            rel="noopener noreferrer"
            href={url} className="flex items-center gap-2 px-4 py-2 rounded-md bg-[#FA320A] text-white font-bold shadow">
            <span className="text-white font-bold">Rotten Tomatoes</span>
            <span className="bg-white text-[#FA320A] px-2 py-0.5 rounded text-sm font-bold">
                {ratting}
            </span>
        </a  >
    )
}

export default RottenTomatoesButton