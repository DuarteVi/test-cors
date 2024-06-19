"use client"
import CallMyself from '@/app/pages/callMyself';
import axios from 'axios';
import { useState } from "react";

export default function Home() {

  const routeGetAlice = 'http://my-api.com:7080/api/data';


  const [dataAlice, setDataAlice] = useState<string | null>(null);
  const [loadingAlice, setLoadingAlice] = useState<boolean>(false);
  const [errorAlice, setErrorAlice] = useState<string | null>(null);
  const handleClickAlice = async () => {
    setLoadingAlice(true);
    setErrorAlice(null);
    try {
      const response = await axios.get(routeGetAlice); // Remplacez '/api/data' par votre URL de l'API
      setDataAlice(response.data.pseudo);
    } catch (error) {
      setErrorAlice('Erreur lors de la récupération des données');
    } finally {
      setLoadingAlice(false);
    }
  };
  
  return (
    <main>

      <h1 style={{ color: 'green', textAlign: 'center' }}>Welcome to my little CORS training site</h1>

      <p>Here, you can simply test different CORS configurations. Some requests are on the same origin, and others on an remote api.</p>

      <CallMyself></CallMyself>

      <div style={{textAlign: 'center'}}>
        <h3>Alice :</h3>
        <button onClick={handleClickAlice}>GET</button>
        {loadingAlice && <p>Chargement...</p>}
        {errorAlice && <p>{errorAlice}</p>}
        {dataAlice && <p>Données: {dataAlice}</p>}
      </div>

    </main>
  );
}

