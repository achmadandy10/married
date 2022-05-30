import { FaBook, FaCameraRetro, FaEnvelope, FaMap, FaMusic, FaUsers } from "react-icons/fa"
import { Footer, Navbar } from "../components"

export const Feature = () => {
  return (
    <div className="max-w-[1500px] mx-auto h-screen">
      <Navbar />

      <main className="px-5 md:px-24 my-24">
        <section>
          <h1 className="text-3xl text-center font-semibold">
            Fitur Terbaik
          </h1>
          <p className="text-center mt-3">
            Fitur undangan pernikahan online terbaik yang siap kami sediakan untuk kalian dapatkan sist
          </p>

          <div className="grid grid-cols-3 gap-6 mt-24">
            <div className="mx-auto text-center flex flex-col justify-center items-center shadow rounded-lg p-10">
              <FaUsers className="w-10 h-10 mb-5"/>
              <h3 className="text-center font-semibold text-2xl mb-5">Nama Tamu</h3>
              <p>
                Menampilkan daftar nama tamu yang diundang agar terasa lebih dekat
              </p>
            </div>
            <div className="mx-auto text-center flex flex-col justify-center items-center shadow rounded-lg p-10">
              <FaBook className="w-10 h-10 mb-5"/>
              <h3 className="text-center font-semibold text-2xl mb-5">Buku Tamu</h3>
              <p>
                Menerima ucapan dan doa serta kehadiran dari tamu undangan
              </p>
            </div>
            <div className="mx-auto text-center flex flex-col justify-center items-center shadow rounded-lg p-10">
              <FaEnvelope className="w-10 h-10 mb-5"/>
              <h3 className="text-center font-semibold text-2xl mb-5">Amplop Digital</h3>
              <p>
                Tamu dapat memberikan amplop langsung secara digital
              </p>
            </div>
            <div className="mx-auto text-center flex flex-col justify-center items-center shadow rounded-lg p-10">
              <FaMap className="w-10 h-10 mb-5"/>
              <h3 className="text-center font-semibold text-2xl mb-5">Google Maps</h3>
              <p>
                Dapat menunjukkan dan mengarahkan tamu ke lokasi acara
              </p>
            </div>
            <div className="mx-auto text-center flex flex-col justify-center items-center shadow rounded-lg p-10">
              <FaCameraRetro className="w-10 h-10 mb-5"/>
              <h3 className="text-center font-semibold text-2xl mb-5">Galeri Foto</h3>
              <p>
                Bagikan momen bahagia Anda kepada tamu undangan
              </p>
            </div>
            <div className="mx-auto text-center flex flex-col justify-center items-center shadow rounded-lg p-10">
              <FaMusic className="w-10 h-10 mb-5"/>
              <h3 className="text-center font-semibold text-2xl mb-5">Background Music</h3>
              <p>
                Hiasi undangan pernikahan online dengan musik sesukamu
              </p>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}