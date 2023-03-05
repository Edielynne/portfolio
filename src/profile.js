import React from 'react'
import Footer from './Footer'
import Info from './Info'
import Timeline from './Timeline'
import {Link} from 'react-router-dom'
import Projects from './Projects'

const Profile = () => {
  return (
    
    <div className="p-16 'w-full flex items-center justify-center">
    
 

     {<div className="p-10 rounded-3xl bg-white shadow mt-24">
      <div className="grid grid-cols-1 md:grid-cols-3">
        <div className='grid grid-cols-1 text-center order-last md:order-first mt-0 md:mt-0'>
      <a href= "https://drive.google.com/file/d/1r5u3zjMa4FgjcPDb9qa24JzAGNjszW_Y/view?usp=share_link"  target="_blank">
    <button type="button" title="Via Google Drive" className="w-full flex items-center justify-center text-white bg-gradient-to-b from-pink-300 via-pink-500 to-pink-700 hover:bg-gradient-to-t focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-xl text-sm px-10 py-2.5 text-center mr-1 mb-2 hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
        <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true" className="w-6 h-6">
        <path stroke-linecap="round" stroke-linejoin="round" d="M18.375 12.739l-7.693 7.693a4.5 4.5 0 01-6.364-6.364l10.94-10.94A3 3 0 1119.5 7.372L8.552 18.32m.009-.01l-.01.01m5.699-9.941l-7.81 7.81a1.5 1.5 0 002.112 2.13"></path>
        </svg> 
      
        <p className="text-white ml-2">My Resume</p>
      
    </button>
    </a>
    </div>
   
    <div id="tooltip-default" role="tooltip" class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700">
    Tooltip content
    <div class="tooltip-arrow" data-popper-arrow></div>
    </div>

        <div className="relative">
          <div className="w-48 h-48 bg-pink-100 mx-auto rounded-full shadow-2xl absolute inset-x-0 top-0 -mt-24 flex items-center justify-center text-pink-500">
          <img
                        className=" rounded-full"
                        src="https://firebasestorage.googleapis.com/v0/b/geolect-login.appspot.com/o/Ed%2F330567231_851500609245258_8523618507158330001_n.jpg?alt=media&token=3018157e-d71a-47a7-b670-a371fc59d1ca&fbclid=IwAR3Ec0aZB3dg2J5aMwxzDX4VxdQPijfILW_O25pF_IOnDevohZ1KC5kCH4s"
                        alt=""
                      />
          </div>
        </div>
    
        <div className="space-x-8 flex justify-between mt-32 md:mt-0 md:justify-center">
   


       <Link to="/contactme" className ="w-full">
    <button type="button"  className="w-full flex items-center justify-center text-white bg-gradient-to-b from-pink-300 via-pink-500 to-pink-700 hover:bg-gradient-to-t focus:ring-4 focus:outline-none focus:ring-pink-300 dark:focus:ring-pink-800 font-medium rounded-xl text-sm px-10 py-2.5 text-center mr-1 mb-2 hover:shadow-lg font-medium transition transform hover:-translate-y-0.5">
   
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 9v.906a2.25 2.25 0 01-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 001.183 1.981l6.478 3.488m8.839 2.51l-4.66-2.51m0 0l-1.023-.55a2.25 2.25 0 00-2.134 0l-1.022.55m0 0l-4.661 2.51m16.5 1.615a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V8.844a2.25 2.25 0 011.183-1.98l7.5-4.04a2.25 2.25 0 012.134 0l7.5 4.04a2.25 2.25 0 011.183 1.98V19.5z" />
    </svg>
    <p className="text-white ml-2">Message Me!</p>
  
    </button>
    </Link>
   
    
    
     
    
        </div>
      </div>
      

    
      <div className="mt-20 text-center border-b pb-12">
        <h1 className="text-4xl font-medium text-gray-700">Edie-lynne Barnes</h1>
        <p className="font-bold text-gray-600 mt-3 underline">UI/UX Developer</p>
    
       
      </div>
      

      <div className="mt-5 flex flex-col justify-center">
       
      </div>


    

    <div className="mt-10 text-center border-b pb-12">
    <Info/>
    </div>

   
    <div className="mt-10 border-b pb-12 ">
    <p className="mt-2  text-center text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-10">Work Experiences</p>
    <Timeline/>
    </div>
    <Projects/>
    <div className="mt-5 ">
    <Footer/>
    </div>

    </div>}
    
    </div>
  )
}

export default Profile