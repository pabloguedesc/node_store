import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { Purchase } from "../../entities/Purchase";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
export class ListAllPurchasesUseCase {
  constructor(
    @inject("PurchasesRepositoryInPrisma")
    private purchasesRepositoryInPrisma: IPurchasesRepository,
  ) {}
  async execute(): Promise<Purchase[]> {
    try {
      const allPurchases =
        await this.purchasesRepositoryInPrisma.listAllPurchases();

      return allPurchases;
    } catch (error) {
      throw new AppError(error);
    }
  }
}
