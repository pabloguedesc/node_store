import { Product } from "../../product/entities/Product";

export interface IAllDataPurchase {
  id: number;
  total: number;
  data_criacao: Date;
  tipo_pagamento: string;
  status: string;
  produto: Product[];
}
