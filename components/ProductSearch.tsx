import { useState } from 'react';

export default function ProductSearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    const res = await fetch(
      `https://world.openfoodfacts.org/cgi/search.pl?search_terms=${encodeURIComponent(query)}&search_simple=1&action=process&json=1`
    );
    const data = await res.json();
    setResults(data.products || []);
    setLoading(false);
  };

  return (
    <div className="mt-8">
      <h2 className="text-xl font-bold mb-4">🔍 Cerca un prodotto reale (Open Food Facts)</h2>
      <form onSubmit={handleSearch} className="flex gap-2 mb-4">
        <input
          type="text"
          placeholder="Es: pasta barilla"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="p-2 border w-full"
        />
        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
          Cerca
        </button>
      </form>
      {loading && <p>Caricamento...</p>}
      <ul className="space-y-2">
        {results.map((item, i) => (
          <li key={i} className="border p-2 rounded">
            <strong>{item.product_name || 'Nome prodotto non disponibile'}</strong><br />
            Marca: {item.brands || 'N/D'}<br />
            Categoria: {item.categories || 'N/D'}<br />
            <img src={item.image_thumb_url} alt={item.product_name} className="w-20 mt-2" />
          </li>
        ))}
      </ul>
    </div>
  );
}
