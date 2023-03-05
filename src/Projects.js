import React from 'react'

const Projects = () => {
  return (
    <div>
    
    <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css"/>
    
   
    <div class="flex items-center justify-center bg-white py-10 ">
        <div class="flex flex-col">
            
           
            <div class="flex flex-col mt-5">
              
                <div class="container max-w-7xl px-4">
                   
                    <div class="flex flex-wrap justify-center text-center mb-10">
                        <div class="w-full lg:w-6/12 px-4">
                           
                            <h1 class="text-gray-900 text-4xl font-bold mb-8">
                                My Projects
                            </h1>
    
{/*                           
                            <p class="text-gray-700 text-lg font-light">
                                Stacktrek Projects
                            </p> */}
                        </div> 
                    </div>
    
                   
                    <div class="flex flex-wrap grid-cols">
                        
                    <div class="w-full md:w-6/12 lg:w-1/3 mb-6 px-6 sm:px-6 lg:px-4 ">
                    
                            <div class="flex flex-col ">
                            
                                <a href="https://github.com/Edielynne/stacktrek/blob/main/python/Quiz%20game%20QandA.txt"  target="_blank" class="mx-auto">
                                <div className='bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 opacity-100 transition duration-300 ease-in-out hover:opacity-70'>    
                                </div>
                                    <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 hover:scale-110 "
                                        src="https://nccr-chembio.ch/wp-content/uploads/2020/10/screening_Quiz_Time_Freepik.png"/> 
                                   
                                  
                                </a>
                               
                                
    
                              
                                <div class="text-center mt-6">
                                   
                                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                                        Quiz Game
                                    </h1>
    
                                 
                                    <div class="text-gray-700 font-light mb-2">
                                        Text base game
                                    </div>
    
                                 
                                    
                                </div>
                            </div>
                        </div>
    
                       
                        <div class="w-full md:w-6/12 lg:w-1/3 mb-6 px-6 sm:px-6 lg:px-4">
                            <div class="flex flex-col">
                                
                                <a href="http://localhost:3001/" target="blank"class="mx-auto">
                                    <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 hover:scale-110"
                                        src="https://firebasestorage.googleapis.com/v0/b/geolect-login.appspot.com/o/Ed%2Flogo.png?alt=media&token=8980f60e-d299-440a-9c65-9465f5039c68"/>
                                </a>
    
                               
                                <div class="text-center mt-6">
                                
                                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                                        Swim n' Waves
                                    </h1>
    
                                 
                                    <div class="text-gray-700 font-light mb-2">
                                        Capstone Projects
                                    </div>
    
                                    
                                </div>
                            </div>
                        </div>
    
                       
                        <div class="w-full md:w-6/12 lg:w-1/3 mb-6 px-6 sm:px-6 lg:px-4">
                            <div class="flex flex-col">
                              
                                <a href="https://github.com/Edielynne/stacktrek/blob/main/python/Hangman.py" target="_blank" class="mx-auto">
                                    <img class="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100 hover:scale-110"
                                        src="https://t4.ftcdn.net/jpg/03/63/09/07/360_F_363090764_GPQ2Id3whpuLdSJBqwKSKFd0rr9iWbgc.jpg"/>
                                </a>
    
                               
                                <div class="text-center mt-6">
                                    
                                    <h1 class="text-gray-900 text-xl font-bold mb-1">
                                        Hangman
                                    </h1>
    
                                    
                                    <div class="text-gray-700 font-light mb-2">
                                        Game guessing
                                    </div>
    
                                  
                                   
                                </div>
                            </div>
                        </div>
    
                
                        
                        
                    </div>
                </div>
            </div>
        </div>
    </div></div>
  )
}

export default Projects