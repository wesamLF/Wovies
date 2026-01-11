
const Imdb_button = ({ ratting, url }: { ratting: string, url: string }) => {
  
  return (
    <a target="_blank"
      rel="noopener noreferrer"
      href={url} className="px-4 py-2 rounded-md bg-[#F5C518] text-black font-bold flex items-center gap-2 shadow">
      <span className="text-black font-bold">IMDb</span>
      {ratting != "" &&
        <span className="bg-black text-[#F5C518] px-2 py-0.5 rounded text-sm font-bold">
          {ratting}
        </span>}

    </a>
  )
}

export default Imdb_button