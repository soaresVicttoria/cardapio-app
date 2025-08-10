import { useEffect, useState } from "react";
import "../estilos/DetalhesPrato.css"; // Importando o CSS específico para o componente
import { useParams, Link } from "react-router-dom";
import api from "../http/api";
import { Prato } from "../interfaces";

function DetalhesPrato() {
  const { id } = useParams<{ id: string }>();
  const [prato, setPrato] = useState<Prato>();

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await api.get(`/pratos/${id}`);
        const { data } = response;

        setPrato(data);
      } catch (error: any) {
        console.error("Erro ao carregar o prato: ", error);
      }
    }
    if (id) {
      fetchData();
    }
  }, [id]);

  console.log(prato);
  if (!prato) {
    return <div>Prato não encontrado</div>;
  }

  return (
    <>
      <div className="detalhes-prato">
        <div className="detalhes-prato-card">
          <div className="detalhes-prato-card-header">
            <img src={prato.imagem} alt={prato.nome} />
            <div className="detalhes-prato-card-header-texto">
              <h1>{prato.nome}</h1>
              <p>
                <strong>Cozinha: </strong>
                {prato.cozinha}
              </p>
              <p>
                <strong>Valor: </strong>
                R${prato.valor}
              </p>
            </div>
          </div>
          <p>
            <strong>Descrição da sua experiência Gastronômica:</strong>
            {prato.descricao_detalhada}
          </p>
          <Link to={"/"}>
            <button>Voltar</button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default DetalhesPrato;
