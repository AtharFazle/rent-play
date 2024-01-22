'use client';
import { FC, useState } from 'react';

import CountdownTimer from '@/components/Common/CountdownTimer';
import { ModalGameOver, ModalGameStart } from './components/Modal';

const ContainerHome: FC = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [isGameStart, setIsGameStart] = useState<boolean>(false);
  const [isGameOver, setIsGameOver] = useState<boolean>(false);
  const [namePlayer, setNamePlayer] = useState<string>('');
  const [score, setScore] = useState<number | string>(0);

  const toggle = () => setIsOpen(!isOpen);
  const toggleGameStart = () => setIsGameStart(!isGameStart);
  const toggleGameOver = () => setIsGameOver(!isGameOver);

  console.log('modal =>', isOpen);
  console.log('game start =>', isGameStart);
  console.log('game over =>', isGameOver);

  // Membuat objek audio context
  const audioContext = new window.AudioContext();

  let maxPercentage = 0;
  let visualPercentage = 0;

  // Mendapatkan akses ke mikrofon
  navigator.mediaDevices
    .getUserMedia({ audio: true })
    .then(function (stream) {
      // Membuat objek audio source dari stream mikrofon
      const audioSource = audioContext.createMediaStreamSource(stream);

      // Membuat objek analyser untuk menganalisis data audio
      const analyser = audioContext.createAnalyser();
      audioSource.connect(analyser);

      // Mengatur ukuran buffer untuk analisis
      analyser.fftSize = 256;
      const bufferLength = analyser.frequencyBinCount;
      const dataArray = new Uint8Array(bufferLength);

      // Mendapatkan referensi ke elemen HTML untuk menampilkan volume
      const volumeMeter = document.getElementById('volumeMeter');

      // Fungsi untuk mengupdate tampilan volume
      function updateVolume() {
        analyser.getByteFrequencyData(dataArray);

        // Menghitung rata-rata volume
        const averageVolume =
          dataArray.reduce((acc, value) => acc + value, 0) / bufferLength;

        // Mengatur tinggi div volumeMeter sesuai dengan volume
        const result = (averageVolume / 255) * 100;
        if (result > maxPercentage) {
          maxPercentage = result;
          visualPercentage = normalize(maxPercentage);
          if (visualPercentage >= 0) {
            volumeMeter!.style.height = `${visualPercentage}%`;
            (volumeMeter as HTMLElement).innerHTML =
              visualPercentage.toFixed(2);

            setScore(visualPercentage.toFixed(2));
          }
        }

        // console.log(result);

        // Memanggil fungsi updateVolume secara rekursif untuk animasi
        requestAnimationFrame(updateVolume);
      }

      // Memulai animasi
      updateVolume();
    })
    .catch(function (err) {
      console.error('Error accessing microphone:', err);
    });

  function normalize(nilaiAsli: number) {
    // Contoh: Normalisasi angka dari rentang 30-70 ke rentang 0-100
    const batasBawah = 30;
    const rentangNilaiAwal = 70 - 30;
    const rentangNormalisasi = 100;
    return ((nilaiAsli - batasBawah) / rentangNilaiAwal) * rentangNormalisasi;
  }

  return (
    <main>
      {/* Countdown Start Game */}
      {isGameStart && namePlayer ? (
        <CountdownTimer initialSeconds={3} isSecondOnly={true} />
      ) : null}

      {/* Modal Game Start */}
      <div
        className={`${isOpen ? 'block' : 'hidden'
          } absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50`}
      >
        <div className="bg-black/70 w-screen h-screen" />
        <ModalGameStart
          toggle={toggle}
          toggleGameStart={toggleGameStart}
          isGameStart={isGameStart}
          namePlayer={namePlayer}
          setNamePlayer={setNamePlayer}
        />
      </div>

      {/* Modal Game Over */}
      <div
        className={`${isGameOver ? 'block' : 'hidden'
          } absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-50`}
      >
        <div className="bg-black/70 w-screen h-screen" />
        <ModalGameOver toggle={toggleGameOver} />
      </div>

      {/* Game */}
      <div className="bg-[black] w-full h-screen">
        <div className="bg-[url('/assets/bg.png')] max-w-auto md:max-w-xl mx-auto h-screen bg-white bg-cover bg-center relative">
          <div className="absolute top-48 -translate-y-1/2 left-1/2 -translate-x-1/2 flex items-center justify-center mx-auto">
            <CountdownTimer
              initialSeconds={3600}
              toggleGameOver={toggleGameOver}

            />
          </div>

          {/* <div className="absolute top-80 -translate-y-1/2 left-1/2 -translate-x-1/2 flex flex-col items-center justify-center mx-auto z-50">
            <p>name player = {namePlayer}</p>
            <p>game start? {isGameStart ? 'true' : 'false'}</p>
            <p>game over? {isGameOver ? 'true' : 'false'}</p>
            <p>skor? {score}</p>
            <div id="volumeMeter"></div>
          </div> */}

          <div>
            <img
              src="/assets/eskrim-transparan-crop.png"
              width={350}
              height={350}
              alt="Rent and Play"
              className="absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2"
            />

            <img
              src="/assets/eskrim-solid-crop.png"
              width={350}
              height={350}
              alt="Rent and Play"
              className="masking absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2 z-10"
            />
          </div>

          <button
            disabled={isGameStart && namePlayer ? true : false}
            className={`${isGameStart && namePlayer ? 'cursor-not-allowed' : 'cursor-pointer'}`}
            onClick={() => toggle()}
          >
            <img
              src="/assets/start-crop.png"
              width={150}
              height={150}
              alt="Rent and Play"
              className="absolute bottom-20 left-1/2 -translate-x-1/2"
            />
          </button>
        </div>
      </div>
    </main>
  );
};

export default ContainerHome;
