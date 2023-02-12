
import React from 'react'
import { ArrowPathIcon, CodeBracketSquareIcon, FingerPrintIcon,  HeartIcon } from '@heroicons/react/24/outline'
const features = [
    {
      name: 'UI/UX',
      description:
        'I can help create a nice interface for an app,website or other interactive media and i mainly prefer using tailwind for UI/UX Design.',
      icon: CodeBracketSquareIcon,
    },
    {
      name: 'Front end ',
      description:
        'I will be responsible for maintaining and improving a website and using a variety of markup languages and also developing new user-facing features, collaborating with the team to improve the usability.',
      icon: HeartIcon,
    },
    
    
  ]
const Info = () => {
    return (
        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className=" mt-1 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl ">
                Who am i?
              </p>
              <p className="mt-6 text-lg text-justify   text-gray-600 pb-10 ">
               
I am a graduate of Associate in Computer Technologies with different job experiences like SMM, Customer Service Clerk, and Data Entry Clerk. Recently I decided to take a second chance to pursue a career in technology and am currently enrolled in StackTrek Bootcamp to become a Full Stack Developer.
              </p>
              
              <p className="border-t mt-2  text-3xl pt-10 font-bold tracking-tight text-gray-900 sm:text-4xl">
                What do i do?
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl sm:mt-15 lg:mt-6 lg:max-w-4xl">
              <dl className="grid max-w-xl grid-cols-1 gap-y-10 gap-x-8 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
                {features.map((feature) => (
                  <div key={feature.name} className="relative  bg-gray-200  rounded-2xl p-3">
                    <dt className="text-base font-semibold leading-7 text-white">
                      <div className="flex items-center justify-center  h-10  rounded-lg bg-pink-600">
                      <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      {feature.name} 
                      </div>
                     
                    </dt>
                    <dd className="mt-2 text-base leading-7 text-gray-600">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      )
    }
    

export default Info



