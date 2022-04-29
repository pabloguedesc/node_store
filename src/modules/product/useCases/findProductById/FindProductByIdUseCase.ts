import { Product } from "@prisma/client";
import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { FindProductByIdValidations } from "../../../../utils/Validations/product/FindProductByIdValidations";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class FindProductByIdUseCase {
  constructor(
    @inject("ProductsRepositoryInPrisma")
    private productsRepositoryInPrisma: IProductsRepository,
  ) {}
  async execute(id_product: number): Promise<Product> {
    const validation = await FindProductByIdValidations(id_product);

    if (!validation.status) {
      throw new AppError(validation.message, validation.statusCode);
    }

    return this.productsRepositoryInPrisma.findProductById(id_product);
  }
}
