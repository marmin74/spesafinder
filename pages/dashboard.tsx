import ProductSearch from '../components/ProductSearch';

export default function Dashboard() {
  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">La tua Lista della Spesa</h1>
      <p>Qui potrai aggiungere i tuoi prodotti, confrontare i prezzi e vedere dove conviene acquistare!</p>
<ProductSearch />

    </div>
  );
}
