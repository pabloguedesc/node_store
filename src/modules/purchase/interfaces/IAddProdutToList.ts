export interface IAddProductToList {
  id_compra: number;
  id_produto: number;
  quantidade?: number;
  quantidadeEmEstoque?: number;
  valor?: number;
}
