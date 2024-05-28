"use client"
import axios from 'axios';
import { useEffect, useState } from "react";

export default function Home() {

  const routeCallAuto = 'https://test-cors-drab.vercel.app/api/hello';
  const routeGetAlice = 'https://test-cors-drab.vercel.app/api/hello';
  const routeDeleteBob = 'https://test-cors-drab.vercel.app/api/hello';


  const [pseudoGetAlice, setFirstName] = useState<string>('');

  useEffect(() => {
    const fetchFirstName = async () => {
      const res = await fetch(routeCallAuto);
      console.log("respons = " + res);
      const data = await res.json();
      setFirstName(data.pseudo);
    };

    fetchFirstName();
  }, []);

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

  const [dataBob, setDataBob] = useState<string | null>(null);
  const [loadingBob, setLoadingBob] = useState<boolean>(false);
  const [errorBob, setErrorBob] = useState<string | null>(null);
  const handleClickBob = async () => {
    setLoadingBob(true);
    setErrorBob(null);
    try {
      const response = await axios.delete(routeDeleteBob); // Remplacez '/api/data' par votre URL de l'API
      setDataBob(response.data.pseudo);
    } catch (error) {
      setErrorBob('Erreur lors de la récupération des données');
    } finally {
      setLoadingBob(false);
    }
  };
  
  return (
    <main>

      <h1 style={{ color: 'green', textAlign: 'center' }}>Mon site</h1>

      <div style={{textAlign: 'center'}}>
          <p> Call auto : {pseudoGetAlice}</p>
      </div>

      <div style={{textAlign: 'center'}}>
      <h3>Alice :</h3>
      <button onClick={handleClickAlice}>GET</button>
      {loadingAlice && <p>Chargement...</p>}
      {errorAlice && <p>{errorAlice}</p>}
      {dataAlice && <p>Données: {dataAlice}</p>}
      </div>

      <div style={{textAlign: 'center'}}>
      <h3>Bob :</h3>
      <button onClick={handleClickBob}>DELETE</button>
      {loadingBob&& <p>Chargement...</p>}
      {errorBob && <p>{errorBob}</p>}
      {dataBob && <p>Données: {dataBob}</p>}
      </div>

    </main>
  );
}

