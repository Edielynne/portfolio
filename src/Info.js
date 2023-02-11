
import React from 'react'
import { ArrowPathIcon, CodeBracketSquareIcon, FingerPrintIcon,  HeartIcon } from '@heroicons/react/24/outline'
const features = [
    {
      name: 'UI/UX',
      description:
        'Morbi viverra dui mi arcu sed. Tellus semper adipiscing suspendisse semper morbi. Odio urna massa nunc massa.',
      icon: CodeBracketSquareIcon,
    },
    {
      name: 'Front end ',
      description:
        'Sit quis amet rutrum tellus ullamcorper ultricies libero dolor eget. Sem sodales gravida quam turpis enim lacus amet.',
      icon: HeartIcon,
    },
    
    
  ]
const Info = () => {
    return (
        <div className="bg-white py-2 sm:py-2">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:text-center">
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                What do I do?
              </p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
                Quis tellus eget adipiscing convallis sit sit eget aliquet quis. Suspendisse eget egestas a elementum
                pulvinar et feugiat blandit at. In mi viverra elit nunc.
              </p>
            </div>
            <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
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



