import React from 'react'
// import './Navbar.css'
import counter from '../counter.png'
// import countContext from '../Context/countContext'

const Navbar = (props) => {
    // const count_context = useContext(countContext);
  return (
    <div className="flex justify-between align-middle bg-orange-400">
      <img className="w-[50px] m-[10px] font-bold" src={counter} alt="img" />
      <p className='m-[20px] text-white text-lg'>Count is : {props.count}</p>
      <button className='bg-[#008af4] w-[120px] m-[20px] text-white h-[30px] rounded-lg font-semibold' onClick={props.handleReset}>Reset Count</button>
    </div>
  )
}

export default Navbar
