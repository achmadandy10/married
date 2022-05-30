import { FaCheck } from "react-icons/fa"
import { Footer, Navbar } from "../components"

export const Price = () => {
  return (
    <div className="max-w-[1500px] mx-auto h-screen">
      <Navbar />

      <main className="px-5 md:px-24 my-24">
        <section>
          <h1 className="text-3xl text-center font-semibold">
            Harga Undangan
          </h1>
          <p className="text-center mt-3">
            Pilih paket undangan pernikahan sesuai dengan kebutuhan & keinginanmu, santai untuk harga sangat terjangkau banget ya sis 
          </p>

          <div className="grid grid-cols-3 gap-6 mt-24">
            <div className="shadow-lg rounded-lg p-10 flex items-center justify-center flex-col">
              <h3 className="uppercase text-xl font-semibold text-center">Gratis</h3>
              <div className="mt-10 font-semibold flex">
                <div>Rp</div>
                <div className="text-4xl">0</div>
              </div>
              <div className="grid my-10">
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Edit Tanpa Batas
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Amplop Digital
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Google Maps
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Galeri Foto
                </div>
              </div>
              <button 
                type="button" 
                className="text-white bg-yellow-900 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Pilih Paket
              </button>
            </div>
            <div className="shadow-lg bg-yellow-900 text-white rounded-lg p-10 flex items-center justify-center flex-col">
              <h3 className="uppercase text-xl font-semibold text-center">Diamond</h3>
              <div className="mt-10 font-semibold flex">
                <div>Rp</div>
                <div className="text-4xl">125.000</div>
              </div>
              <div className="grid my-10">
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Edit Tanpa Batas
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Amplop Digital
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Google Maps
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Galeri Foto
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Buku Tamu
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Backsound Music
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Compress Foto Otomatis
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Nama Tamu Undangan
                </div>
              </div>
              <button 
                type="button" 
                className="bg-white hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-gray-200 text-black font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Pilih Paket
              </button>
            </div>
            <div className="shadow-lg rounded-lg p-10 flex items-center justify-center flex-col">
              <h3 className="uppercase text-xl font-semibold text-center">Silver</h3>
              <div className="mt-10 font-semibold flex">
                <div>Rp</div>
                <div className="text-4xl">80.000</div>
              </div>
              <div className="grid my-10">
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Edit Tanpa Batas
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Amplop Digital
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Google Maps
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Galeri Foto
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Buku Tamu
                </div>
                <div className="flex items-center gap-3">
                  <FaCheck />
                  Backsound Music
                </div>
              </div>
              <button 
                type="button" 
                className="text-white bg-yellow-900 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Pilih Paket
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}