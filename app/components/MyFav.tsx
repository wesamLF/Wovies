'use client'

import Link from 'next/link'



const MyFav = () => {


 

    return (
        <div className='relative'>
            <Link href="/fav" className=''>My Favorites ❤️</Link>
        </div>
    )
}

export default MyFav