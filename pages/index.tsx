import Image from 'next/image';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d4ede0] to-[#a8d5ba] flex flex-col items-center justify-center p-6">
      <div className="max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Risparmia sulla tua spesa 🛒</h1>
          <p className="text-gray-700 text-lg mb-6">
            Confronta i prezzi nei supermercati vicini e riduci il costo del tuo carrello.
          </p>
          <a href="/register" className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg shadow hover:bg-green-700 transition">
            Inizia ora
          </a>

          <div className="mt-10 bg-white shadow-md rounded-lg p-4">
            <h2 className="font-semibold text-gray-800 mb-2">📝 Lista della spesa</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">Pane integrale <span>€</span></li>
              <li className="flex justify-between">Latte <span>€</span></li>
              <li className="flex justify-between">Mele <span>€</span></li>
              <li className="flex justify-between">Pasta <span>€</span></li>
            </ul>
          </div>

          <div className="mt-6 bg-white shadow-md rounded-lg p-4">
            <h2 className="font-semibold text-gray-800 mb-2">📍 Supermercati</h2>
            <ul className="space-y-2">
              <li className="flex justify-between">Supermercato A <span>9,40 €</span></li>
              <li className="flex justify-between">Supermercato B <span>10,20 €</span></li>
            </ul>
          </div>
        </div>

        <div className="w-full">
          <Image
            src="/landing-graphic.png"
            alt="SpesaFinder illustrazione"
            width={500}
            height={500}
            className="rounded-xl shadow"
          />
        </div>
      </div>
    </main>
  );
}
