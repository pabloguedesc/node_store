import { ProductsRepositoryInPrisma } from "../../../modules/product/repositories/implementations/ProductsRepositoryInPrisma";
import { IResponseValidation } from "../interfaces/IResponseValidation";

const productsRepositoryInPrisma = new ProductsRepositoryInPrisma();

export async function FindProductByIdValidations(
  id_product: number,
): Promise<IResponseValidation> {
  const product = await productsRepositoryInPrisma.findProductById(id_product);

  if (!product) {
    return {
      status: false,
      message: "Produto não encontrado",
      statusCode: 404,
    };
  }
  return { status: true };
}
