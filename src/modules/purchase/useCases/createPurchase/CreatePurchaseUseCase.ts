import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { CreatePurchaseValidations } from "../../../../utils/Validations/purchase/CreatePurchaseValidations";
import { ICreatePurchaseRequest } from "../../interfaces/ICreatePurchaseRequest";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
export class CreatePurchaseUseCase {
  constructor(
    @inject("PurchasesRepositoryInPrisma")
    private purchasesRepositoryInPrisma: IPurchasesRepository,
  ) {}
  async execute({
    tipo_pagamento,
    produtos,
    total,
  }: ICreatePurchaseRequest): Promise<void> {
    // função para validação de erros na requisição
    const validations = await CreatePurchaseValidations({
      produtos,
      tipo_pagamento,
      total,
    });

    // verificação de status da validação: "true" = sem erros / "false" = "erro"
    if (!validations.status) {
      throw new AppError(validations.message, validations.statusCode);
    }

    await this.purchasesRepositoryInPrisma.createPurchase({
      tipo_pagamento,
      total,
      produtos,
    });
  }
}
