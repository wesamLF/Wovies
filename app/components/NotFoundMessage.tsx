import React from 'react'

const NotFoundMessage = ({ msg }: { msg: string }) => {
    return (
        <div className='flex justify-center items-center mx-auto max-w-[500px] h-[650px] '>
            <p className=' text-error text-2xl'>{msg}</p>
        </div>
    )
}

export default NotFoundMessage