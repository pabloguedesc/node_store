import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { FindProductByIdValidations } from "../../../../utils/Validations/product/FindProductByIdValidations";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class DeleteProductByIdUseCase {
  constructor(
    @inject("ProductsRepositoryInPrisma")
    private productsRepositoryInPrisma: IProductsRepository,
  ) {}
  async execute(id_product: number): Promise<void> {
    const validation = await FindProductByIdValidations(id_product);

    if (!validation.status) {
      throw new AppError(validation.message, validation.statusCode);
    }

    this.productsRepositoryInPrisma.deleteProductById(id_product);
  }
}
