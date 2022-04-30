import { inject, injectable } from "tsyringe";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
export class FinalizePurchaseUseCase {
  constructor(
    @inject("PurchasesRepositoryInPrisma")
    private purchasesRepositoryInPrisma: IPurchasesRepository,
  ) {}
  async execute(id_compra: number): Promise<void> {
    await this.purchasesRepositoryInPrisma.finalizePurchase(id_compra);
  }
}
