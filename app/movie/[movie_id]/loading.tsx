import React from 'react'

const loading = () => {
  return (
    <div className="relative">
            <div className="z-0 absolute w-full h-full bg-blued-200   opacity-35 skeleton" ></div>

            <div className="flex flex-col lg:flex-row py-6 lg:py-24 px-4  lg:px-12 relative" >

                <div className="flex-1 px-0 sm:px-16 md:px-42 lg:px-0 ">


                    

                    <figure className='w-full aspect-2/3 skeleton'>
                        
                    </figure>
                </div >

                <div className=" flex-3 p-6 lg:px-12 flex flex-col  justify-between">
                    <div className=" flex flex-col gap-12">

                        <h2 className='text-6xl font-bold skeleton w-full lg:w-[600px] h-[50px]'></h2>

                        <div className="flex flex-col gap-6">
                            
                            <p className=' skeleton w-full lg:w-[750px] h-[400px]'></p>
                            
                        </div>
                    </div>


                   
                </div>
            </div>


        </div >
  )
}

export default loading