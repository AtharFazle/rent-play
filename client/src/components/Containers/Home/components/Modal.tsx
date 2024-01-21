import { FC } from 'react';

type Props = {
  toggle: () => void;
  toggleGameStart?: () => void;
  isGameStart?: boolean;
  isGameOver?: boolean;
  namePlayer?: string;
  setNamePlayer?: (name: string) => void;
};

export const ModalGameStart: FC<Props> = ({
  toggle,
  toggleGameStart,
  namePlayer,
  setNamePlayer,
}) => {
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
          onClick={() => {
            toggle();
            toggleGameStart && toggleGameStart();
          }}
        >
          <p className="text-xl font-bold">Mulai</p>
        </button>
      </div>
    </div>
  );
};

export const ModalGameSuccess: FC<Props> = ({ toggle, namePlayer }) => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white w-96 h-96 flex flex-col items-center justify-center rounded-xl">
        <h1 className="text-4xl font-bold">
          Selamat {namePlayer}, Anda Berhasil!
        </h1>
        <p className="text-2xl font-bold">Skor Kamu</p>
        <p className="text-2xl font-bold">100</p>
        <button
          className="bg-[#FFD600] text-white w-40 h-12 rounded-xl mt-4"
          onClick={() => toggle()}
        >
          <p className="text-xl font-bold">Main Lagi</p>
        </button>
      </div>
    </div>
  );
};

export const ModalGameOver: FC<Props> = ({ toggle, namePlayer }) => {
  return (
    <div className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50">
      <div className="bg-white w-96 h-96 flex flex-col items-center justify-center rounded-xl">
        <h1 className="text-4xl font-bold">Maaf {namePlayer}, Anda Gagal!</h1>
        <p className="text-2xl font-bold">Skor Kamu</p>
        <p className="text-2xl font-bold">100</p>
        <button
          className="bg-[#FFD600] text-white w-40 h-12 rounded-xl mt-4"
          onClick={() => toggle()}
        >
          <p className="text-xl font-bold">Main Lagi</p>
        </button>
      </div>
    </div>
  );
};
