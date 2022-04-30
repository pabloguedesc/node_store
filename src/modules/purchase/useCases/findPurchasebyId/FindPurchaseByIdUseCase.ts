import { inject, injectable } from "tsyringe";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
export class FindPurchaseByIdUseCase {
  constructor(
    @inject("PurchasesRepositoryInPrisma")
    private purchasesRepositoryInPrisma: IPurchasesRepository,
  ) {}
  async execute(id_compra: number) {
    const purchase = await this.purchasesRepositoryInPrisma.findPurchaseById(
      id_compra,
    );

    return purchase;
  }
}
