import Link from 'next/link';
export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center h-screen text-center">
      <h1 className="text-4xl font-bold mb-4">Benvenuto in SpesaFinder 🛒</h1>
      <p className="mb-6">Confronta i prezzi dei tuoi prodotti nei supermercati vicini.</p>
      <div className="space-x-4">
        <Link href="/login" className="bg-blue-500 text-white px-4 py-2 rounded">Login</Link>
        <Link href="/register" className="bg-green-500 text-white px-4 py-2 rounded">Registrati</Link>
      </div>
    </main>
  );
}
