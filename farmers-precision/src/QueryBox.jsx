import React,{useState, useEffect} from 'react'

const QueryBox = () => {
    const [crop, setCrop] = useState("")
    const [city, setCity] = useState('')
    const [info, setInfo] = useState([])
  return (
    <div className='bg-slate-200 h-[100vh] '>
       <div className='flex items-center  h-[50vh] justify-center align-center'>
        <p>Type your request </p>
       </div>

       <div className='flex items-center  h-[50vh] justify-center align-center flex-col gap-4'>
           <input type='text'    placeholder="input the name of crop" className='w-[500px] rounded-[10px] p-4 border-slate-900 border-2' />
           <input type='text'    placeholder="input the name of the city" className=' border-2 border-slate-900 w-[500px] rounded-[10px] p-4' />
        <button className='bg-slate-900 text-white p-4 rounded-[10px] w-[100px] hover:bg-slate-300'>Send</button>
       </div>
    </div>
  )
}

export default QueryBox