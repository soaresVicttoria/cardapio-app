import { ChangeEvent, FormEvent, useEffect, useState } from "react";
import "../estilos/FormularioPrato.css"; // Importando o CSS específico para o componente
import { NovoPrato, IsEditing, Prato } from "../interfaces";
import { useParams } from "react-router-dom";
import api from "../http/api";
import Button from "./Button";

const initialStatePrato: NovoPrato = {
  nome: "",
  cozinha: "",
  descricao_resumida: "",
  descricao_detalhada: "",
  imagem: "",
  valor: 0,
};

const FormularioPrato = ({ isEditing = false }: IsEditing) => {
  const { id } = useParams<{ id: string }>();
  const [prato, setPrato] = useState<NovoPrato | Prato>(initialStatePrato);

  useEffect(() => {
    async function fetchData() {
      if (isEditing && id) {
        try {
          const response = await api.get<Prato>(`/pratos/${id}`);
          const { data } = response;

          setPrato(data);
        } catch (error: any) {
          console.error("Erro ao buscar o prato: ", error);
        }
      } else if (!isEditing) {
        setPrato(initialStatePrato);
      }
    }
    fetchData();
  }, [isEditing, id]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPrato((prevPrato) => ({
      ...prevPrato,
      [name]: name === "valor" ? parseFloat(value) || 0 : value,
    }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      if (isEditing && id) {
        await api.put(`/pratos/${id}`, prato);
      } else if (!isEditing) {
        await api.post("/pratos", prato);
      }
    } catch (error: any) {
      console.error("Erro ao salvar o prato: ", error);
    }
  };

  return (
    <>
      <div className="form-container">
        <h1>{isEditing ? "Atualizar prato" : "Cadastro de pratos"}</h1>
        <p>
          Bem-vindo ao sistema de{" "}
          {isEditing ? "atualização de prato" : "cadastro de pratos"}!
        </p>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="nome"
            placeholder="Digite o nome do prato"
            value={prato.nome}
            onChange={handleChange}
          />
          <input
            type="text"
            name="cozinha"
            placeholder="Digite o tipo de cozinha do prato"
            value={prato.cozinha}
            onChange={handleChange}
          />
          <input
            type="text"
            name="descricao_resumida"
            placeholder="Digite a descrição resumida do prato"
            value={prato.descricao_resumida}
            onChange={handleChange}
          />
          <input
            type="text"
            name="descricao_detalhada"
            placeholder="Digite a descrição detalhada do prato"
            value={prato.descricao_detalhada}
            onChange={handleChange}
          />
          <input
            type="text"
            name="imagem"
            placeholder="Digite a url da imagem do prato"
            value={prato.imagem}
            onChange={handleChange}
          />
          <input
            type="text"
            name="valor"
            placeholder="Digite o valor do prato"
            value={prato.valor}
            onChange={handleChange}
          />
          <Button type="submit">
            {isEditing ? "Atualizar prato" : "Cadastrar prato"}
          </Button>
        </form>
      </div>
    </>
  );
};

export default FormularioPrato;
