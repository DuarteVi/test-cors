"use client"
import CallRemoteNobodyOrigin from '@/app/pages/CallRemoteNobodyOrigin';
import CallRemotePutMethod from '@/app/pages/CallRemotePutMethod';
import CallRemoteValidAllOrigin from '@/app/pages/CallRemoteValidAllOrigin';
import CallRemoteValidMyOrigin from '@/app/pages/CallRemoteValidMyOrigin';
import CallSameOrigin from '@/app/pages/CallSameOrigin';
import { URL } from '@/app/pages/utils';

export default function Home() {
  
  return (
    <main>

      <h1 style={{ color: 'green', textAlign: 'center' }}>Welcome to my little CORS training site</h1>

      <p>Here, you can simply test different CORS configurations. Some requests are on the same origin, and others on an remote api.</p>

      <h2>Do request on the same origin</h2>
      <CallSameOrigin url={URL.SAME_ORIGIN}></CallSameOrigin>

      <h2>Do request on remote API</h2>
      <CallRemoteValidAllOrigin index="1" url={URL.REMOTE_VALID_ALL_ORIGIN}></CallRemoteValidAllOrigin>
      <CallRemoteValidMyOrigin index="2" url={URL.REMOTE_VALID_MY_ORIGIN}></CallRemoteValidMyOrigin>
      <CallRemotePutMethod index="3" url={URL.REMOTE_PUT_METHOD}></CallRemotePutMethod>
      <CallRemoteNobodyOrigin index="4" url={URL.REMOTE_NOBODY_ORIGIN}></CallRemoteNobodyOrigin>
    </main>
  );
}

