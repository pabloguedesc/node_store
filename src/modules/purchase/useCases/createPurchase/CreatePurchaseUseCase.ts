import { Purchase } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
export class CreatePurchaseUseCase {
  constructor(
    @inject("PurchasesRepositoryInPrisma")
    private purchasesRepositoryInPrisma: IPurchasesRepository,
  ) {}
  async execute(): Promise<Purchase> {
    const purchase = await this.purchasesRepositoryInPrisma.createPurchase();
    return purchase;
  }
}
