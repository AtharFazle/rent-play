import React from 'react'

type Props = {
    increaseStep: () => void;
    namePlayer: string;
    setNamePlayer: () => void;
}

const Modal = ({ increaseStep, namePlayer, setNamePlayer }: Props) => {
    return (
        <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
            <div className="bg-white w-96 h-96 flex flex-col items-center justify-center rounded-xl">
                <h1 className="text-4xl font-bold">Game Start!</h1>
                <label htmlFor="namePlayer" className="text-2xl font-bold mt-10">
                    Masukkan Nama Kamu
                </label>
                <input
                    type="text"
                    name="namePlayer"
                    id="namePlayer"
                    autoFocus
                    value={namePlayer}
                    onChange={(e) => setNamePlayer && setNamePlayer(e.target.value)}
                    className="max-w-md bg-white border border-gray-300 rounded-lg text-2xl mt-10 p-1"
                />
                <button
                    className={`${!namePlayer ? 'cursor-not-allowed' : 'cursor-pointer'} bg-[#FFD600] text-white w-40 h-12 rounded-xl mt-10`}
                    disabled={!namePlayer}
                    onClick={increaseStep}
                >
                    <p className="text-xl font-bold">Mulai</p>
                </button>
            </div>
        </div>
    )
}

export default Modal