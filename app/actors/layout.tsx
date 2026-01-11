import React, { Children } from 'react'
import SearchBarActors from '../components/SearchBarActors'

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className="flex flex-col">
            <div className=' flex justify-center'>
                <SearchBarActors />
            </div>
            <div className=''>

                {children}


            </div>

        </div>



    )
}

export default layout