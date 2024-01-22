import React from 'react'
import Countdown from 'react-countdown';

type Props = {
  step: number;
  increaseStep: () => void
}

const Countdown3Seconds = ({ increaseStep, step }: Props) => {

  console.log(Date.now() + 10000)
  return (
    <div className='w-full h-screen flex-justify-center items-center font-semibold bg-black/60 text-white  text-5xl'>
    <Countdown
      date={Date.now() + 4000}
      intervalDelay={0}
      precision={3}
      renderer={props => <div>{props.seconds}</div>}
      onComplete={increaseStep}
    />
    </div>

  )
}

export default Countdown3Seconds