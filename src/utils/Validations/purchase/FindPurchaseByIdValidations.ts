import { PurchasesRepositoryInPrisma } from "../../../modules/purchase/repositories/implementations/PurchasesRepositoryInPrisma";
import { IResponseValidation } from "../interfaces/IResponseValidation";

const purchasesRepositoryInPrisma = new PurchasesRepositoryInPrisma();
export async function FindPurchaseByIdValidations(
  id_compra: number,
): Promise<IResponseValidation> {
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

  return { status: true };
}
