import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { EditProductValidations } from "../../../../utils/Validations/product/EditProductValidations";
import { IEditProduct } from "../../interfaces/IEditProduct";
import { IProductsRepository } from "../../repositories/IProductsRepository";

@injectable()
export class EditProductUseCase {
  constructor(
    @inject("ProductsRepositoryInPrisma")
    private productsRepositoryInPrisma: IProductsRepository,
  ) {}
  async execute({
    id_product,
    descricao,
    nome,
    preco,
  }: IEditProduct): Promise<void> {
    const validation = await EditProductValidations({
      id_product,
      descricao,
      nome,
      preco,
    });

    if (!validation.status) {
      throw new AppError(validation.message, validation.statusCode);
    }

    await this.productsRepositoryInPrisma.editProduct({
      id_product,
      descricao,
      nome,
      preco,
    });
  }
}
