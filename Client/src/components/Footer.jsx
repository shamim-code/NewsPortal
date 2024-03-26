import React from 'react'

export default function Footer() {
  return (
    <div>
        <div className='p-5 bg-gray-800 rounded-md grid grid-cols-2 md:flex justify-around'>
        <div className="contact text-white font-serif">
                <p className=' text-2xl'>SamNews</p>
                <p>Address: Ashulia, Savar, Dhaka</p>
                <p>Email: samnews@info.com</p>
                <p>017xxxxxxxxx</p>
        </div>

        <div className=' text-white font-serif'>
            <p className=' text-2xl'>Category</p>
            <ul >
                <li>Desh</li>
                <li>International</li>
                <li>Business</li>
                <li>Entertainment</li>
                <li>Health</li>
            </ul>
        </div>
        </div>
        <p className='text-white bg-gray-800 text-center border-t-2 border-indigo-500 border-b-2 py-1'>All Right Reserve @ SamNews</p>
    </div>
  )
}
