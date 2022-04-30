import { TypePayment } from "@prisma/client";

export interface IPurchaseProduct {
  id_produto: number;
  preco: number;
  quantidade: number;
}

export interface ICreatePurchaseRequest {
  tipo_pagamento: TypePayment;
  total: number;
  produtos: IPurchaseProduct[];
}
