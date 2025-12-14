import Banner from "../../public/images/Banner.jpg";
export default function About() {
  return (
    <section id="about" className="bg-slate-100 text-slate-100 py-24">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold mb-6 text-black">✨ Tentang kami</h2>

        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="max-w-2xl">
            <p className="text-black text-lg leading-relaxed mb-4">
              MicaStore adalah toko fashion kekinian yang hadir untuk kamu yang
              ingin tampil stylish setiap hari. Kami menyediakan berbagai outfit
              tren terbaru dengan kualitas terbaik dan harga yang tetap
              terjangkau.
            </p>

            <p className="text-black text-lg leading-relaxed">
              Setiap koleksi dipilih dengan teliti agar nyaman dipakai dan cocok
              untuk berbagai gaya, mulai dari casual, streetwear, hingga fashion
              viral yang sedang hits. MicaStore percaya bahwa setiap orang punya
              gaya uniknya sendiri — dan kami ada untuk membantu kamu menemukan
              style terbaikmu.
            </p>
          </div>

          <img
            src={Banner}
            alt="MicaStore"
            className="w-full md:w-1/2 rounded-2xl shadow-2xl object-cover"
          />
        </div>
      </div>
    </section>
  );
}
