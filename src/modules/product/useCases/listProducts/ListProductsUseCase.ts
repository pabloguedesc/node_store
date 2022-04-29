import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class ListProductsUseCase {
  constructor(
    @inject("ProductsRepositoryInPrisma")
    private productsRepositoryInPrisma: IProductsRepository,
  ) {}
  async execute() {
    try {
      const allProducts = await this.productsRepositoryInPrisma.listProducts();
      return allProducts;
    } catch (error) {
      throw new AppError(error);
    }
  }
}
