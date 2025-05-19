import { useState } from 'react';
import { supabase } from '../lib/supabaseClient';
import { useRouter } from 'next/router';

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleRegister = async (e: any) => {
    e.preventDefault();
    const { error } = await supabase.auth.signUp({ email, password });
    if (!error) router.push('/dashboard');
    else alert(error.message);
  };

  return (
    <div className="p-8 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Registrazione</h1>
      <form onSubmit={handleRegister} className="space-y-4">
        <input type="email" placeholder="Email" className="w-full p-2 border" value={email} onChange={(e) => setEmail(e.target.value)} />
        <input type="password" placeholder="Password" className="w-full p-2 border" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">Registrati</button>
      </form>
    </div>
  );
}
