import React from 'react'

const GridContainer = ({ children }: { children: React.ReactNode }) => {
    return (
        <div className=" text-primary pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">

            {children}
        </div>
    )
}

export default GridContainer