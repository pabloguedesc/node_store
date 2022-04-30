import { IEditPurchase } from "../../../modules/purchase/interfaces/IEditPurchase";
import { PurchasesRepositoryInPrisma } from "../../../modules/purchase/repositories/implementations/PurchasesRepositoryInPrisma";
import { IResponseValidation } from "../interfaces/IResponseValidation";

const purchasesRepositoryInPrisma = new PurchasesRepositoryInPrisma();

export async function EditPurchaseValidations({
  id_compra,
  tipo_pagamento,
}: IEditPurchase): Promise<IResponseValidation> {
  const purchase = await purchasesRepositoryInPrisma.findPurchaseById(
    id_compra,
  );

  if (!purchase) {
    return {
      status: false,
      message: `Compra '${id_compra}' não encontrada`,
      statusCode: 404,
    };
  }

  if (
    !tipo_pagamento ||
    !["dinheiro", "debito", "credito"].includes(tipo_pagamento)
  ) {
    return { status: false, message: "Pagamento inválido!" };
  }

  return { status: true };
}
