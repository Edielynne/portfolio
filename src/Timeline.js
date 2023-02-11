import React from 'react'
import { ArrowPathIcon, EllipsisHorizontalCircleIcon, FingerPrintIcon,  HeartIcon } from '@heroicons/react/24/outline'
//p-16 'w-full flex items-center justify-center
const Timeline = () => {
  return (
    <div className='  flex items-center justify-center '>

<ol class="relative border-l border-gray-700">                  
    <li class="mb-10 ml-6">            
        <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-pink-600 bg-pink-600">
         <EllipsisHorizontalCircleIcon className="h-6 w-6 text-white" aria-hidden="true"/>
        </span>
        <h3 class="flex items-center mb-1 text-lg font-semibold text-gray-900 ">Data Entry Clerk <span class=" text-sm font-medium mr-2 px-2.5 py-0.5 rounded bg-pink-600 text-white ml-3">Latest</span></h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">May 2020 - August 2021</time>
        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Excela Technologies</p>
        {/* <a href="#" class="inline-flex items-center px-4 py-2 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:outline-none focus:ring-gray-200 focus:text-blue-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-700"><svg class="w-4 h-4 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a2 2 0 00-2 2v12a2 2 0 002 2h8a2 2 0 002-2V7.414A2 2 0 0015.414 6L12 2.586A2 2 0 0010.586 2H6zm5 6a1 1 0 10-2 0v3.586l-1.293-1.293a1 1 0 10-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 11.586V8z" clip-rule="evenodd"></path></svg> Download ZIP</a> */}
    </li>
    <li class="mb-10 ml-6">
    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-pink-600 bg-pink-600">
         <ArrowPathIcon className="h-6 w-6 text-white" aria-hidden="true"/>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 ">Customer Service Clerk</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">October 2019 - February 2020</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Our Home</p>
    </li>
    <li class="ml-6">
    <span class="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-pink-600 bg-pink-600">
         <ArrowPathIcon className="h-6 w-6 text-white" aria-hidden="true"/>
        </span>
        <h3 class="mb-1 text-lg font-semibold text-gray-900 ">Social Media Manager and Customer Service Intern</h3>
        <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">June 2017 - November 2017</time>
        <p class="text-base font-normal text-gray-500 dark:text-gray-400">Gladness Staffing Services</p>
    </li>
</ol>



    </div>
  )
}

export default Timeline