import ProductSearch from '../components/ProductSearch';

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#d4ede0] to-[#a8d5ba] p-6 text-gray-800">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">👋 Ciao Marco!</h1>
        <p className="mb-6 text-lg">Ecco la tua area personale per gestire la lista della spesa e confrontare i prezzi dei supermercati.</p>

        {/* Lista della spesa */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4">📝 La tua lista della spesa</h2>
          <ul className="space-y-2 text-lg">
            <li className="flex justify-between">Pane integrale <span className="text-green-600 font-semibold">€1,20</span></li>
            <li className="flex justify-between">Latte <span className="text-green-600 font-semibold">€0,90</span></li>
            <li className="flex justify-between">Pasta <span className="text-green-600 font-semibold">€1,00</span></li>
          </ul>
        </section>

        {/* Ricerca prodotto */}
        <section className="bg-white shadow-md rounded-lg p-6 mb-8">
          <ProductSearch />
        </section>

        {/* Mappa e confronto prezzi */}
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold mb-4">📍 Supermercati nelle vicinanze</h2>
          <p className="text-gray-600 mb-4">Confronta i prezzi totali nei supermercati vicino a te.</p>
          <ul className="space-y-2 text-lg">
            <li className="flex justify-between">🛒 Esselunga <span className="text-green-700 font-bold">€9,20</span></li>
            <li className="flex justify-between">🛒 Carrefour <span className="text-green-700 font-bold">€10,10</span></li>
            <li className="flex justify-between">🛒 Coop <span className="text-green-700 font-bold">€9,80</span></li>
          </ul>
        </section>
      </div>
    </main>
  );
}
