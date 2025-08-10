import { FC, useContext } from "react";
import "../estilos/CardPrato.css";
import { AuthContext } from "../context/authContext";
import { Link, useParams } from "react-router-dom";
import api from "../http/api";

interface CardPratoProps {
  prato: {
    id: number;
    nome: string;
    cozinha: string;
    descricao_resumida: string;
    imagem: string;
  };
}

const CardPrato: FC<CardPratoProps> = (props) => {
  const { id } = useParams<{ id: string }>();
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("AuthContext não está disponível");
  }

  const { usuario, verificarLogin } = authContext;

  const handleDelete = async (id: number) => {
    if (id) {
      await api.delete(`/pratos/${id}`);
    }
  };

  return (
    <>
      <div className="prato-card">
        {usuario?.role === "Gerente" && (
          <div className="menu-container">
            <button className="menu-button" onClick={() => {}}>
              &#x22EE;
            </button>
            <div className="dropdown-menu">
              <Link
                to={`/atualizar-prato/${props.prato.id}`}
                className="dropdown-item"
              >
                Editar
              </Link>
              <button
                onClick={() => {
                  handleDelete(props.prato.id);
                }}
                className="dropdown-item"
              >
                Deletar
              </button>
              <Link
                to={`/detalhes-prato/${props.prato.id}`}
                className="dropdown-item"
              >
                Ver Detalhes
              </Link>
            </div>
          </div>
        )}
        <img src={props.prato.imagem} alt="Feijoada brasileira" />
        <h2 className="nome-prato">{props.prato.nome}</h2>
        <p className="cozinha-prato">{props.prato.cozinha}</p>
        <p className="descricao-curta-prato">
          {props.prato.descricao_resumida}
        </p>
        <Link to={`/detalhes-prato/${props.prato.id}`} className="btn">
          Ver Detalhes
        </Link>
      </div>
    </>
  );
};

export default CardPrato;
