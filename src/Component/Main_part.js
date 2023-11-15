import React from 'react'
// import './Main_part.css'

const Main_part = (props) => {
  const fn = () =>{
    {props.handleCount()}
  }
  return (
    <div>
      <div className="flex flex-col justify-center items-center h-[100vh]">
        <p>Count is : {props.count}</p>
        <button className='bg-[#008af4] text-lg	w-[100px] m-[20px] text-white h-[30px] rounded-lg font-semibold' onClick={fn}>
          Increase
        </button>
      </div>
    </div>
  )
}

export default Main_part

