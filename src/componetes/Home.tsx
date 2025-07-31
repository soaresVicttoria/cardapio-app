import React from "react";
import "../estilos/Home.css";
import terraDasAguas from "../assets/terra_das_aguas.jpg";
import CardPrato from "./CardPrato";
import CardNovoPrato from "./CardNovoPrato";

function Home() {
  const [prato, setPrato] = React.useState({
    nome: "Feijoada",
    cozinha: "Brasileira",
    descricaoCurta:
      "Feijoada completa, com pedaços suculentos de carne suína e aquele sabor brasileiro incomparável.",
    imagem:
      "https://media.istockphoto.com/id/899497396/pt/foto/delicious-brazilian-feijoada.jpg?s=2048x2048&w=is&k=20&c=OO_JGRT2AgsybJxSFB-mFP2vsOn7QtsbqEd1sZiUzuw=",
  });
  const [usuario, setUsuario] = React.useState({
    id: 1,
    email: "joao.silva@dominio.com",
    role: "Gerente",
  });

  const verificarLogin = () => {
    const token = localStorage.getItem("token");
    if (!token || token === "undefined" || token === "null") {
      window.location.href = "/login";
      return;
    }
    const dadosUsuario = atob(token.split(".")[1]);
    if (usuario) {
      setUsuario(JSON.parse(usuario))
    }
    // const usuario = JSON.parse(dadosUsuario);
    console.log("Usuário logado: ", usuario);
  };
  React.useEffect(() => {
    verificarLogin();
  }, []);

  return (
    <div className="home">
      <div className="banner">
        <img src={terraDasAguas} alt="" />
      </div>
      <h1>Bem vindo ao Restaurante Terra das Aguas SENAC - MS</h1>
      <div className="lista-pratos">
        <CardNovoPrato />
        <CardPrato
          nome={prato.nome}
          cozinha={prato.cozinha}
          descricaoCurta={prato.descricaoCurta}
          imagem={prato.imagem}
        />
        <CardPrato
          nome={prato.nome}
          cozinha={prato.cozinha}
          descricaoCurta={prato.descricaoCurta}
          imagem={prato.imagem}
        />
        <CardPrato
          nome={prato.nome}
          cozinha={prato.cozinha}
          descricaoCurta={prato.descricaoCurta}
          imagem={prato.imagem}
        />
        <CardPrato
          nome={prato.nome}
          cozinha={prato.cozinha}
          descricaoCurta={prato.descricaoCurta}
          imagem={prato.imagem}
        />
      </div>
    </div>
  );
}

export default Home;
