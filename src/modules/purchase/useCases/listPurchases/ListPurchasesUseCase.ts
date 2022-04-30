import { Purchase } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
export class ListPurchasesUseCase {
  constructor(
    @inject("PurchasesRepositoryInPrisma")
    private purchasesRepositoryInPrisma: IPurchasesRepository,
  ) {}
  async execute(key: string): Promise<Purchase[]> {
    try {
      const inProgress = [];
      const finished = [];

      const allPurchases =
        await this.purchasesRepositoryInPrisma.listAllPurchases();

      allPurchases.forEach((purchase) => {
        if (purchase.status === "em_andamento") {
          inProgress.push(purchase);
        }
        if (purchase.status === "finalizada") {
          finished.push(purchase);
        }
      });

      switch (key) {
        case "em_andamento":
          return inProgress;
        case "finalizada":
          return finished;
        default:
          return allPurchases;
      }
    } catch (error) {
      throw new AppError(error);
    }
  }
}
