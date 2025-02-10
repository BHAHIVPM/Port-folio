import { useState } from 'react'
import './App.css'
import Tilt from 'react-parallax-tilt';

function Test() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-warning test '>
         <Tilt
    className="background-stripes parallax-effect-glare-scale"
    perspective={500}
    glareEnable={true}
    glareMaxOpacity={0.45}
    scale={1.02}
  >
    <div className="inner-element">
      <div>React</div>
      <div>Parallax Tilt</div>
      <div>👀</div>
    </div>
  </Tilt>
    </div>
  )
}

export default Test
