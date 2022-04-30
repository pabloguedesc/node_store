interface IProductDetails {
  nome: string;
  descricao: string;
}

interface IListProducts {
  id_produto: number;
  preco: number;
  quantidade: number;
  produto: IProductDetails;
}

export class Purchase {
  id: number;
  total: number;
  data_criacao: Date;
  tipo_pagamento: string;
  status: string;
  ListProducts?: IListProducts[];
}
