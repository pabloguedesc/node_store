import { TypePayment } from "@prisma/client";

export interface IEditPurchase {
  id_compra: number;
  tipo_pagamento: TypePayment;
}
