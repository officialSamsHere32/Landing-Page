import React from 'react'
import Profile from '../assets/Profile.jpg'

function GridLayout() {
  return (
    <div className='max-w-[1200] mx-auto px-6 py-10'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
            <div className='bg-green-700 shadow rounded-lg p-4'>
                <img src={Profile} alt='Hello' loading='lazy' className='w-full h-400 object-cover rounded-lg mb-4'/>
                <h3 className='font-semibold mt-3'>Product 1</h3>
                <p className='text-gray-700'>Subscription for product</p>
                <p className='text-lg font-bold'>$12.99</p>
            <div className='bg-green-700 shadow rounded-lg p-4'>
                <img src={Profile} alt='Hello' loading='lazy' className=''/>
                <h3 className='font-semibold mt-3'>Product 2</h3>
                <p className='text-gray-700'>Subscription for product</p>
                <p className='text-lg font-bold'>$17.99</p>
            </div>
            </div>
        </div>
    </div>
  )
}

export default GridLayout