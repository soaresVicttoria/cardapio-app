export interface Prato {
  id: number;
  nome: string;
  cozinha: string;
  descricao_resumida: string;
  descricao_detalhada: string;
  imagem: string;
  valor: number;
}

export interface NovoPrato {
  nome: string;
  cozinha: string;
  descricao_resumida: string;
  descricao_detalhada: string;
  imagem: string;
  valor: number;
}

export interface IsEditing {
  isEditing: boolean;
}
