'use client';
import { FC, useState, useEffect } from 'react';

import CountdownTimer from '@/components/Common/CountdownTimer';

const ContainerHome: FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  console.log(isOpen);

  // // Membuat objek audio context
  // const audioContext = new (window.AudioContext || window.webkitAudioContext)();

  // let maxPercentage = 0;
  // let visualPercentage = 0;

  // // Mendapatkan akses ke mikrofon
  // navigator.mediaDevices
  //   .getUserMedia({ audio: true })
  //   .then(function (stream) {
  //     // Membuat objek audio source dari stream mikrofon
  //     const audioSource = audioContext.createMediaStreamSource(stream);

  //     // Membuat objek analyser untuk menganalisis data audio
  //     const analyser = audioContext.createAnalyser();
  //     audioSource.connect(analyser);

  //     // Mengatur ukuran buffer untuk analisis
  //     analyser.fftSize = 256;
  //     const bufferLength = analyser.frequencyBinCount;
  //     const dataArray = new Uint8Array(bufferLength);

  //     // Mendapatkan referensi ke elemen HTML untuk menampilkan volume
  //     const volumeMeter = document.getElementById('volumeMeter');

  //     // Fungsi untuk mengupdate tampilan volume
  //     function updateVolume() {
  //       analyser.getByteFrequencyData(dataArray);

  //       // Menghitung rata-rata volume
  //       const averageVolume =
  //         dataArray.reduce((acc, value) => acc + value, 0) / bufferLength;

  //       // Mengatur tinggi div volumeMeter sesuai dengan volume
  //       const result = (averageVolume / 255) * 100;
  //       if (result > maxPercentage) {
  //         maxPercentage = result;
  //         visualPercentage = normalize(maxPercentage);
  //         if (visualPercentage >= 0) {
  //           volumeMeter.innerHTML = visualPercentage.toFixed(2);
  //         }
  //       }

  //       console.log(result);

  //       // Memanggil fungsi updateVolume secara rekursif untuk animasi
  //       requestAnimationFrame(updateVolume);
  //     }

  //     // Memulai animasi
  //     updateVolume();
  //   })
  //   .catch(function (err) {
  //     console.error('Error accessing microphone:', err);
  //   });

  // function normalize(nilaiAsli) {
  //   // Contoh: Normalisasi angka dari rentang 30-70 ke rentang 0-100
  //   const batasBawah = 30;
  //   const rentangNilaiAwal = 70 - 30;
  //   const rentangNormalisasi = 100;
  //   return ((nilaiAsli - batasBawah) / rentangNilaiAwal) * rentangNormalisasi;
  // }

  return (
    <main>
      <div className="absolute z-50 left-0 right-0 bottom-1/2 top-1/2">
        <CountdownTimer initialSeconds={60} isSecondOnly={true} />
        <div className="relative bg-black/50 min-h-screen" />
      </div>

      <section className="relative flex flex-col bg-[#f9f4d6] min-h-screen items-center justify-between mx-auto">
        <img
          src="/assets/atas.png"
          alt=""
          className="bg-cover bg-center w-full h-full"
          loading="lazy"
        />
        <img
          src="/assets/bawah.png"
          alt=""
          className="bg-cover bg-center w-full h-full"
          loading="lazy"
        />

        <div className="absolute flex flex-col items-center bottom-28">
          {/* Countdown */}
          {/* <div className="">
          </div> */}
          <CountdownTimer initialSeconds={10} />
          {/* <p className="text-6xl text-black">00:00:00</p> */}

          <div className="my-5">
            <img
              src="/assets/eskrim-transparan-crop.png"
              alt=""
              className="w-full h-full"
              loading="lazy"
            />
            {/* <img
              src="/assets/eskrim-solid-crop.png"
              alt=""
              className="w-full h-full"
              loading="lazy"
            /> */}
          </div>

          <button onClick={() => toggle()}>
            <img
              src="/assets/start-crop.png"
              alt=""
              className="w-48 h-full"
              loading="lazy"
            />
          </button>
        </div>
      </section>
    </main>
  );
};

export default ContainerHome;
