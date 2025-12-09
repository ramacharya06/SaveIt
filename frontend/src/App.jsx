import React from 'react'

function NavBar() {
  return (
    // Ensure z-index is set so it stays above other content
    <nav className='sticky top-0 z-50 w-full h-16 bg-gray-800 flex justify-between items-center p-4'>
        <div className='flex items-center gap-4'>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5dx3LSr7LxuwgU-JNNDYSo_X6HWEhMX3A7UqOwsHryw&s" alt="SaveIt image" className='h-[50px] w-[50px] shadow-sm shadow-neutral-500 rounded-full object-cover' />
        <h1 className='text-neutral-300 text-2xl font-bold'>Save It</h1>
        </div>
        <div>
            <button className='text-neutral-400 mx-4 hover:text-white hover:border-b-2 hover:border-b-white duration-200 text-xl'>Home</button>
            <button className='text-neutral-400 mx-4 hover:text-white hover:border-b-2 hover:border-b-white duration-200 text-xl'>About</button>
            <button className='text-neutral-400 mx-4 hover:text-white hover:border-b-2 hover:border-b-white duration-200 text-xl'>Contact</button>
        </div>
    </nav>
  )
}

export const Footer = () => {
    return (
        <footer className='w-full h-16 bg-gray-800 flex flex-col justify-center items-center p-4 mt-8'>
            <p className='text-neutral-400'>&copy; 2025 Save It. All rights reserved.</p>
            <p className='text-neutral-400'>Developed by: Ram Acharya</p>
        </footer>
        
    )
}
export const App = () => {
  return (
    <div className='flex items-center flex-col mb-2 w-full font-instrument-serif'>
        <NavBar />
        <div className='flex justify-center items-center m-6 flex-col gap-4 w-1/2' >
          {/* Main content area */}
          <div className='text-4xl text-neutral-300'>Welcome to Save It</div>
          <div className='text-xl text-center text-neutral-400'>
            Save It is a cutting-edge application that helps you download files from the internet with ease and efficiency. Whether you're looking to save documents, images, videos, or any other type of file, Save It has got you covered.
          </div>
        </div>
    </div>
  )
}

export default App