import React from 'react'
import { FaPlayCircle } from "react-icons/fa";

const Home = () => {
  return (
    <div className=' h-[80vh]'>

      <div className='flex  mx-auto w-[80%] h-full'>
          <div className='border w-[50%] '>

              <h2 className='text-[12px] text-orange-400'>Best Resume Platform</h2>

              <h1 className='font-bold text-[32px]'>Make your resume Stand Out</h1>

              <p className='text-[12px] text-gray-700'>With our AI powered resume builder platform, you can easily create a perfectly 
                customized resume for any job, that stands out from the crowd.
              </p>


             <div className='flex items-center gap-12 border'>
                <button className='border bg-blue-400 text-white px-8 py-2 rounded-full border-blue-400 '>Get Started</button>
                
                <div className='flex items-center gap-3'>
                  <FaPlayCircle/>
                  <button>Watch Demo</button>
                </div>
             </div>
          </div>

          <div className='border border-red-600 w-[50%]'>
            IMG
          </div>
      </div>
    </div>
  )
}

export default Home