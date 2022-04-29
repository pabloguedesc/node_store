import { ProductsRepositoryInPrisma } from "../../../modules/product/repositories/implementations/ProductsRepositoryInPrisma";
import { IAddProductToList } from "../../../modules/purchase/interfaces/IAddProdutToList";
import { PurchasesRepositoryInPrisma } from "../../../modules/purchase/repositories/implementations/PurchasesRepositoryInPrisma";
import { IResponseValidation } from "../interfaces/IResponseValidation";

const productsRepositoryInPrisma = new ProductsRepositoryInPrisma();
const purchasesRepositoryInPrisma = new PurchasesRepositoryInPrisma();

export async function AddProductValidations({
  id_compra,
  id_produto,
  quantidade,
}: IAddProductToList): Promise<IResponseValidation> {
  const product = await productsRepositoryInPrisma.findProductById(id_produto);
  const purchase = await purchasesRepositoryInPrisma.findPurchaseById(
    id_compra,
  );

  if (!product) {
    return {
      status: false,
      message: `Produto '${id_produto}' não encontrado`,
      statusCode: 404,
    };
  }
  if (!purchase) {
    return {
      status: false,
      message: `Compra '${id_compra}' não encontrada`,
      statusCode: 404,
    };
  }

  const findProductInListByIdProduct =
    await purchasesRepositoryInPrisma.findProductInListByIdProduct(id_produto);

  if (findProductInListByIdProduct) {
    return {
      status: false,
      message: `Produto já existe na lista da compra: '${id_compra}'`,
    };
  }

  const quantityInStock = product.quantidade;

  if (quantidade > quantityInStock) {
    return {
      status: false,
      message: "Quantidade maior que o estoque disponível",
    };
  }

  return { status: true };
}
