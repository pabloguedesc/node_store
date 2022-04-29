import { inject, injectable } from "tsyringe";
import { AppError } from "../../../../shared/middlewares/ErrorMiddleware";
import { AddProductValidations } from "../../../../utils/Validations/purchase/AddProductValidations";
import { IProductsRepository } from "../../../product/repositories/IProductsRepository";
import { IAddProductToList } from "../../interfaces/IAddProdutToList";
import { IPurchasesRepository } from "../../repositories/IPurchasesRepository";

@injectable()
export class AddProductUseCase {
  constructor(
    @inject("PurchasesRepositoryInPrisma")
    private purchasesRepositoryInPrisma: IPurchasesRepository,
    @inject("ProductsRepositoryInPrisma")
    private productsRepositoryInPrisma: IProductsRepository,
  ) {}
  async execute({
    id_compra,
    id_produto,
    quantidade,
  }: IAddProductToList): Promise<void> {
    const product = await this.productsRepositoryInPrisma.findProductById(
      id_produto,
    );

    const validations = await AddProductValidations({
      id_compra,
      id_produto,
      quantidade,
    });

    if (!validations.status) {
      throw new AppError(validations.message, validations.statusCode);
    }

    const value = product.preco * quantidade;
    const inStockAfter = product.quantidade - quantidade;

    const addProduct: IAddProductToList = {
      id_compra,
      id_produto,
      quantidade,
      quantidadeEmEstoque: inStockAfter,
      valor: value,
    };

    await this.purchasesRepositoryInPrisma.addProductToList(addProduct);
  }
}
