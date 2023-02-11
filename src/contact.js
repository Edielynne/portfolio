import React,{useState}from 'react'

import { Link , useNavigate} from 'react-router-dom';

const Contactus = () => {
  const [field,setfield] = useState(true);
    const ValidField = 'w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
    const ErrorField = 'w-full border-2 text-red-500 border-red-500 rounded-xl p-4 mt-1 bg-transparent'
    let navigate = useNavigate();
    const [from , setFrom] = useState('')
    const  [data , setData] = useState ({
        Email: '',
        Password:'',
        Fname:'',
        Lname:'',
        Address:'',
        Contact:'',
        
    })

    
    
    const handle =  (e)=>{
       
      const newData = {...data}
      //console.log(e.target.type)
      newData[e.target.id] = e.target.value
      setData(newData)
      setFrom("New Email from "+ data.Fname + " " + data.Lname)
     
      console.log(from)
  }

  const thanks = () =>{
    
        //navigate("/thanks") 
  }
  return (


    
   
            
    <div className="flex w-full h-screen">
       

      <div className="w-full flex items-center justify-center ">
      <div className='bg-white px-10 py-5 rounded-3xl border-2 border-gray-200 justify-center '>
    <h1 className='text-5xl font-semibold mb-5 '>Contact me!</h1>
   
    <form
          action="https://formsubmit.co/barnesedielynne171999@gmail.com"
          method="POST"
          onSubmit={thanks}
        >
    <div className='mt-2  '>


 
    <div className='flex items-center gap-1  '>
          
          <input onChange={(e)=>handle(e)}
               id = "Fname" value = {data.Fname}
              className='focus:ring-pink-500 focus:border-pink-500 w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
              placeholder='First Name'
              type="text"
              name="Firstname"
              required
          />
       

          <input onChange={(e)=>handle(e)}
               id = "Lname" value = {data.Lname}
              className='focus:ring-pink-500 focus:border-pink-500 w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
              placeholder='Last Name'
              type="text"
              name="Lastname"
              required
          />
          <input type="hidden" name="_subject" value={from}></input>
          <input type="hidden" name="_next" value="http://192.168.100.130:3001/"></input>
          <input type="hidden" name="_autoresponse" value="Thankyou! We have recieved your message"></input>
      </div>


        <div>
         
            <input onChange={(e)=>handle(e)}
                id = "Email" value = {data.Email}
                className='focus:ring-pink-500 focus:border-pink-500 w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Enter your email'
                type="email"
                name="email"
                required
            />
            
        </div>

       
       
        <div>
           
            <input onChange={(e)=>handle(e)}
                 id = "Contact" value = {data.Contact}
                className='focus:ring-pink-500 focus:border-pink-500 w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Contact Number'
                type="tel"
                required
            />
        </div>

        <div>
            <textarea onChange={(e)=>handle(e)}
                id = "Message"
                className='focus:ring-pink-500 focus:border-pink-500 w-full border-2 border-gray-100 rounded-xl p-4 mt-1 bg-transparent'
                placeholder='Message me!'
                type="text"
                name="Message"
                rows={5}
                required
            />
        </div>

       

        <div className='mt-8 flex text-center flex-col gap-y-4 border-b pb-5'>
            <button   type="submit" disabled={!field} className='active:scale-[0.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out py-3 rounded-xl bg-pink-500 text-white text-lg font-bold'>
                Submit
            </button>
            <Link to="/">
            <p className=' hover:scale-[1.01] ease-in-out hover:text-pink-500'>Cancel</p>
            </Link>

        </div>
       
        <div className="grid grid-cols-4 mt-10 pt-5  pl-20  justify-center   text-center order-last md:order-first mt-20 md:mt-0 ">
        
        <div>
        <a href="https://github.com/Edielynne" className="  text-pink-700 hover:text-gray-900 ">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="github"
          className="fa-github w-7"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 496 512"
        >
          <path
            fill="currentColor"
            d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"
          ></path>
        </svg>
      </a>
        </div>

        <div>
          <a href="https://www.instagram.com/edlynbrns/" className="text-pink-700 hover:text-gray-900">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="instagram"
          className="fa-instagram w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"
          ></path>
        </svg>
      </a>
        </div>

            <div>
            <a href="#!" className="text-pink-700 hover:text-gray-900">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="linkedin-in"
          className="fa-linkedin-in w-6"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 448 512"
        >
          <path
            fill="currentColor"
            d="M100.28 448H7.4V148.9h92.88zM53.79 108.1C24.09 108.1 0 83.5 0 53.8a53.79 53.79 0 0 1 107.58 0c0 29.7-24.1 54.3-53.79 54.3zM447.9 448h-92.68V302.4c0-34.7-.7-79.2-48.29-79.2-48.29 0-55.69 37.7-55.69 76.7V448h-92.78V148.9h89.08v40.8h1.3c12.4-23.5 42.69-48.3 87.88-48.3 94 0 111.28 61.9 111.28 142.3V448z"
          ></path>
        </svg>
      </a>
        </div>

        <div>
        <a href="https://www.facebook.com/swimnwaves" className=" text-pink-700 hover:text-gray-900">
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fab"
          data-icon="facebook-f"
          className=" fa-facebook-f w-4"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"
          ></path>
        </svg>
      </a>
        </div>
      </div>

    </div>

    </form>
</div>
      </div>
       {/* <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
       <div className="w-60 h-60 bg-gradient-to-tr from-violet-500 to-pink-500 rounded-full animate-spin"/>
        <div className="w-full h-1/2 absolute bottom-0"/>
      
       </div> */}
      </div>

     

  
    
    

  )
}

export default Contactus