import { injectable, inject } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { CreateProductValidations } from "../../../../utils/Validations/product/CreateProductValidations";
import { ICreateProduct } from "../../interfaces/ICreateProduct";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class CreateProductUseCase {
  constructor(
    @inject("ProductsRepositoryInPrisma")
    private productsRepositoryInPrisma: IProductsRepository,
  ) {}
  async execute({ descricao, nome, preco, quantidade }: ICreateProduct) {
    const validations = await CreateProductValidations({
      descricao,
      nome,
      preco,
      quantidade,
    });

    if (!validations.status) {
      throw new AppError(validations.message, validations.statusCode);
    }

    await this.productsRepositoryInPrisma.createProduct({
      descricao,
      nome,
      preco,
      quantidade,
    });
  }
}
