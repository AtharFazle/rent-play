"use client"
import Image from 'next/image'
import React from 'react'
import Modal from './fragments/modal'
import Countdown3Seconds from './fragments/Countdown3Seconds'
import Playground from './fragments/playground'

type Props = {}

const Test = (props: Props) => {
  const [step, setStep] = React.useState(1);
  const [namePlayer, setNamePlayer] = React.useState<string>("")

  const increaseStep = () => {
    setStep(step + 1);
  }
  // const changeName = (str : string){
  //   setNamePlayer(str)
  // }

  console.log(step)

  return (
    <div className='bg-black w-full h-screen'>
      <div className='max-w-lg md:max-w-md mx-auto h-screen bg-white bg-cover bg-center relative'
        style={{ backgroundImage: `url('/assets/bg.png')` }}>
        <Image
          src={"/assets/eskrim-solid-crop.png"}
          width={350}
          height={350}
          alt='Rent and Play'
          className='absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2'
        />
        <Image
          onClick={increaseStep}
          src={"/assets/start-crop.png"}
          width={150}
          height={150}
          alt='Rent and Play'
          className='absolute bottom-20 left-1/2 -translate-x-1/2 cursor-pointer hover:scale-110 duration-200 ease-linear'
        />

        <div className='font-semibold text-3xl'> {step} {namePlayer}</div>
        {step === 2 && (
          <Modal namePlayer={namePlayer} setNamePlayer={setNamePlayer} increaseStep={increaseStep} />
        )}
        {step === 3 && (
          <Countdown3Seconds increaseStep={increaseStep} step={step} />
        )}
        {
          step === 4 && (
            <Playground />
          )
        }
      </div>
    </div>
  )
}

export default Test