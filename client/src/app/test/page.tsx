import Image from 'next/image'
import React from 'react'

type Props = {}

const Test = (props: Props) => {
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
            src={"/assets/start-crop.png"}
            width={150}
            height={150}
            alt='Rent and Play'
            className='absolute bottom-20 left-1/2 -translate-x-1/2'
            />
        </div>
    </div>
  )
}

export default Test