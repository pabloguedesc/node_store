import { IEditProduct } from "../../../modules/product/interfaces/IEditProduct";
import { ProductsRepositoryInPrisma } from "../../../modules/product/repositories/implementations/ProductsRepositoryInPrisma";
import { IResponseValidation } from "../interfaces/IResponseValidation";

const productsRepositoryInPrisma = new ProductsRepositoryInPrisma();

export async function EditProductValidations({
  id_product,
  descricao,
  nome,
  preco,
}: IEditProduct): Promise<IResponseValidation> {
  const product = await productsRepositoryInPrisma.findProductById(id_product);

  if (!product) {
    return {
      status: false,
      message: "Produto não encontrado",
      statusCode: 404,
    };
  }
  if (!descricao) {
    return { status: false, message: "'descricao' é obrigatória" };
  }
  if (!nome) {
    return { status: false, message: "'nome' é obrigatório" };
  }
  if (nome.length < 2) {
    return { status: false, message: "'nome' muito curto" };
  }
  if (!preco) {
    return { status: false, message: "'preco' é obrigatório" };
  }
  if (typeof preco !== "number") {
    return { status: false, message: "'preco' deve ser do tipo 'number'" };
  }
  if (preco < 0.1) {
    return { status: false, message: "'preco' não pode ser inferior a 0.1" };
  }

  return { status: true };
}
