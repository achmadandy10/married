import { Footer, Navbar } from "../components"
import DesignGray from "../images/design_gray.png"
import DesignBlue from "../images/design_blue.png"
import DesignBrown from "../images/design_brown.png"

export const Design = () => {
  return (
    <div className="max-w-[1500px] mx-auto h-screen">
      <Navbar />

      <main className="px-5 md:px-24 my-24">
        <section>
          <h1 className="text-3xl text-center font-semibold">
            Desain Terbaik
          </h1>
          <p className="text-center mt-3">
            Pilih dan gunakan tema undangan pernikahan digital secara unik serta menarik
          </p>

          <div className="grid grid-cols-3 gap-6 mt-24">
            <div className="flex items-center justify-center flex-col gap-5">
              <img src={DesignGray} alt="Design Gray Married" />
              <button 
                type="button" 
                className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Lihat Desain
              </button>
            </div>
            <div className="flex items-center justify-center flex-col gap-5">
              <img src={DesignBlue} alt="Design Blue Married" />
              <button 
                type="button" 
                className="text-white bg-[#C8B3EE] hover:bg-[#e0d5f7] focus:outline-none focus:ring-4 focus:ring-[#d0bfee] font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Lihat Desain
              </button>
            </div>
            <div className="flex items-center justify-center flex-col gap-5">
              <img src={DesignBrown} alt="Design Brown Married" />
              <button 
                type="button" 
                className="text-white bg-yellow-900 hover:bg-amber-800 focus:outline-none focus:ring-4 focus:ring-amber-600 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
              >
                Lihat Desain
              </button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}