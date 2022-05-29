import { Footer, Navbar } from "../components"
import VectorMarried from "../images/vector_married.png"
import Logo from "../images/logo.png"

export const Home = () => {
  return (
    <div className="max-w-[1500px] mx-auto h-screen">
      <Navbar />

      <main className="px-5 md:px-24 my-24">
        <section className="grid grid-cols-2 gap-24">
          <div className="flex flex-col justify-center">
            <h1 className="text-gray-900 text-3xl font-semibold">Undangan Pernikahan Online</h1>
            <p className="text-lg mt-5">
              Bebas berkreasi dan dikelola dalam bentuk website yang menarik serta dapat dibagikan dimanapun dan kapanpun. 
            </p>
            <p className="text-lg mt-5">
              Simple, Elegan, & Cepat
            </p>
            <button className="w-fit mt-10 text-white bg-yellow-900 hover:bg-amber-800 focus:ring-4 focus:ring-amber-600 font-medium rounded-lg text-sm px-7 py-2.5 mr-2 mb-2 dark:bg-amber-600 dark:hover:bg-amber-700 focus:outline-none dark:focus:ring-amber-800">
              Buat Undangan
            </button>
          </div>
          <div>
            <img src={VectorMarried} alt="Vector Married" />
          </div>
        </section>

        <section className="flex flex-col items-center justify-center gap-5 mt-20">
          <h3 className="text-gray-900 text-2xl font-medium">Memperkenalkan</h3>
          <img src={Logo} alt="Married Logo" className="h-20"/>
          <p className="px-24 tracking-widest text-justify">
            <strong>Married.id </strong>: Situs pembuat undangan pernikahan digital dalam bentuk website dengan banyak fitur dan template keren. Kami hadir sebagai sebuah solusi untuk membantu calon mempelai yang berbahagia untuk membuat undangan pernikahan online dengan cepat dan mudah. 
          </p>
        </section>
        
        <section className="mt-20">
          <h3 className="text-gray-900 text-2xl font-medium text-center">Mengapa memilih Merried.id?</h3>
          <div className="grid grid-cols-2 gap-10 mt-10">
            <div className="shadow p-10 rounded-lg flex flex-col justify-center">
              <h2 className="text-lg font-medium mb-4">Harga Terjangkau</h2>
              <p>Membuat undangan pernikahan tidak pernah semurah dan semudah ini </p>
            </div>
            <div className="shadow p-10 rounded-lg flex flex-col justify-center">
              <h2 className="text-lg font-medium mb-4">Fitur Lengkap</h2>
              <p>Fitur yang dapat diandalkan mulai dari proses pemilihan desain, pembuatan undangan hingga proses membagikan undangan.</p>
            </div>
            <div className="shadow p-10 rounded-lg flex flex-col justify-center">
              <h2 className="text-lg font-medium mb-4">Proses Cepat</h2>
              <p>Pemrosesan pembuatan undangan ini hanya memerlukan waktu 15-20 menit dan dapat ditunggu serta dapat diubah kapanpun.</p>
            </div>
            <div className="shadow p-10 rounded-lg flex flex-col justify-center">
              <h2 className="text-lg font-medium mb-4">Support Terbaik</h2>
              <p>Jika perlu bantuan team support kami dapat selalu bisa diandalkan.</p>
            </div>
          </div>
        </section>

        <section className="mt-20">
          <h3 className="text-gray-900 text-2xl font-medium text-center">Mereka yang mempercayai Kami</h3>
          <p className="text-center px-40 mt-10 tracking-widest">Married.id telah dipercaya oleh <strong>10,000</strong> pengguna. Serta telah terkirim ke <strong>150,000</strong> tamu, total biaya percetakan yang dihemat mencapai <strong>Rp. 10,000,000</strong></p>

          <div className="grid grid-cols-3 gap-10 mt-20">
            <div className="rounded-lg flex flex-col items-center justify-center shadow-lg px-10 py-5 gap-10">
              <img className="mx-auto rounded-full" src="https://ui-avatars.com/api/?name=PS&background=6D412A&color=fff" alt="Avatar" />
              <p className="text-center">“Your invitation card design is very elegant! Everyone is satisfied with the design. Overall we all love it!”</p>
              <span className="font-semibold">-Park Shin Hye-</span>
            </div>
            <div className="rounded-lg flex flex-col items-center justify-center shadow-lg px-10 py-5 gap-10">
              <img className="mx-auto rounded-full" src="https://ui-avatars.com/api/?name=JK&background=6D412A&color=fff" alt="Avatar" />
              <p className="text-center">“This website so good, I really love this married.id”</p>
              <span className="font-semibold">-Jennie Kim-</span>
            </div>
            <div className="rounded-lg flex flex-col items-center justify-center shadow-lg px-10 py-5 gap-10">
              <img className="mx-auto rounded-full" src="https://ui-avatars.com/api/?name=HS&background=6D412A&color=fff" alt="Avatar" />
              <p className="text-center">“very good no doubt”</p>
              <span className="font-semibold">-Han So Hee-</span>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}