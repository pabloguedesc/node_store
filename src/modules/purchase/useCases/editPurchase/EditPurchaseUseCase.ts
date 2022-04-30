import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { EditPurchaseValidations } from "../../../../utils/Validations/purchase/EditPurchaseValidations";
import { IEditPurchase } from "../../interfaces/IEditPurchase";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
export class EditPurchaseUseCase {
  constructor(
    @inject("PurchasesRepositoryInPrisma")
    private purchasesRepositoryInPrisma: IPurchasesRepository,
  ) {}
  async execute({ id_compra, tipo_pagamento }: IEditPurchase): Promise<void> {
    const validations = await EditPurchaseValidations({
      id_compra,
      tipo_pagamento,
    });

    if (!validations.status) {
      throw new AppError(validations.message, validations.statusCode);
    }

    await this.purchasesRepositoryInPrisma.editPurchase({
      id_compra,
      tipo_pagamento,
    });
  }
}
