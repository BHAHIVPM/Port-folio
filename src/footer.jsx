import { useState } from 'react'
import './App.css'
import { FaHeart } from "react-icons/fa";
function Footer(op) {
 
  return (
    <div className={`foot `}>
     
          <section className={`footin ${op.mde==false? "dark darkbgfoot ":""}`}>
            <p>Developed with <span className='text-danger'><FaHeart/></span> by Bhahirathan M © 2025</p>
            </section>    
    </div>
  )
}

export default Footer
