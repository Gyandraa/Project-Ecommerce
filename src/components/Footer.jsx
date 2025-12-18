export default function Footer() {
  return (
    <>
      <footer className="w-full py-12 bg-white text-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start border-b border-teal-700/50 pb-8">
            <div className="md:col-span-1 space-y-4">
              <h3 className="text-2xl font-extrabold text-black tracking-wide">
                MicaStore
              </h3>
              <p className="text-black leading-relaxed text-sm">
                Memiliki berbagai macam produk fashion dengan kualitas yang baik
                dan harga yang terjangkau
              </p>
            </div>

            <div className="md:col-span-1 space-y-4">
              <h3 className="text-xl font-bold text-black border-b  pb-2">
                Hubungi Kami
              </h3>

              <div className="space-y-3 text-black text-base">
                <div className="flex items-start">
                  <span className="text-teal-400 mr-3 text-lg">📍</span>
                  <p>
                    <span className="font-semibold">Alamat:</span> <br />
                    Jl. Raya Bandung No. 85, Kab. Bandung, Jawa Barat
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-lg">📞</span>
                  <p>
                    <span className="font-semibold">Telepon:</span> (62)
                    85327-86923
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-lg">📸</span>
                  <p>
                    <span className="font-semibold">Instagram:</span> mica_store
                  </p>
                </div>
                <div className="flex items-center">
                  <span className="text-teal-400 mr-3 text-lg">📧</span>
                  <p>
                    <span className="font-semibold">Email:</span>{" "}
                    MicaStore@gmail.com
                  </p>
                </div>
              </div>
            </div>

            <div className="md:col-span-1 w-full">
              <h3 className="text-xl font-bold text-black border-b  pb-2 mb-4">
                Lokasi Kami
              </h3>
              <div className="w-full">
                <iframe
                  title="Peta Lokasi MicaStore"
                  width="100%"
                  height="200"
                  className="rounded-xl shadow-xl border-2 border-teal-500"
                  src="https://maps.google.com/maps?width=100%25&amp;height=600&amp;hl=en&amp;q=Jatinangor%20jonas+(My%20Business%20Name)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
