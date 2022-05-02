import { ICreateProduct } from "../../../modules/product/interfaces/ICreateProduct";
import { ProductsRepositoryInPrisma } from "../../../modules/product/repositories/implementations/ProductsRepositoryInPrisma";
import { IResponseValidation } from "../interfaces/IResponseValidation";

const productsRepositoryInPrisma = new ProductsRepositoryInPrisma();

export async function CreateProductValidations({
  descricao,
  nome,
  preco,
}: ICreateProduct): Promise<IResponseValidation> {
  const findProductByName = await productsRepositoryInPrisma.findProductByName(
    nome,
  );

  if (findProductByName) {
    if (findProductByName.nome === nome) {
      return { status: false, message: "Produto já existente" };
    }
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
