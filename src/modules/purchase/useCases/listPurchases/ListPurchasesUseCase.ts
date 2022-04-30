import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { Purchase } from "../../entities/Purchase";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
export class ListPurchasesUseCase {
  constructor(
    @inject("PurchasesRepositoryInPrisma")
    private purchasesRepositoryInPrisma: IPurchasesRepository,
  ) {}

  async execute(): Promise<Purchase[]> {
    try {
      return this.purchasesRepositoryInPrisma.listAllPurchases();
    } catch (error) {
      throw new AppError(error);
    }
  }
}
