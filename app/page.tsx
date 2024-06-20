"use client"
import CallSameOrigin from '@/app/pages/CallSameOrigin';
import { URL } from '@/app/pages/utils';

export default function Home() {
  
  return (
    <main>

      <h1 style={{ color: 'green', textAlign: 'center' }}>Welcome to my little CORS training site</h1>

      <p>Here, you can simply test different CORS configurations. Some requests are on the same origin, and others on an remote api.</p>

      <CallSameOrigin url={URL.SAME_ORIGIN}></CallSameOrigin>

    </main>
  );
}

