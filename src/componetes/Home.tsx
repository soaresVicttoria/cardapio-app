import { useState, useEffect } from "react";
import "../estilos/Home.css";
import terraDasAguas from "../assets/terra_das_aguas.jpg";
import CardPrato from "./CardPrato";
import CardNovoPrato from "./CardNovoPrato";
import { AuthProvider } from "../context/authContext";
import api from "../http/api";
import { Prato } from "../interfaces";

function Home() {
  const [pratos, setPratos] = useState<Prato[]>([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/pratos/{id}`);
        const { data } = response;

        setPratos(data);
      } catch (error: any) {
        console.error("Erro ao carregar os pratos: ", error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="lista-pratos">
        <AuthProvider>
          <CardNovoPrato />
          {pratos &&
            pratos.map((prato) => (
              <div key={prato.id}>
                <CardPrato prato={prato} />
              </div>
            ))}
        </AuthProvider>
      </div>
    </div>
  );
}

export default Home;
