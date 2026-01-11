import React from 'react'
import SearchBarMovies from '../components/SearchBarMovies'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <div className=' flex justify-center py-8'>
                <SearchBarMovies />
            </div>
            <div className=' '>

                {children}


            </div>

        </div>



    )
}

export default layout