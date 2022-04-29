import { ICreateProduct } from "../../../modules/product/interfaces/ICreateProduct";
import { IResponseValidation } from "../interfaces/IResponseValidation";

export async function CreateProductValidations({
  descricao,
  nome,
  preco,
  quantidade,
}: ICreateProduct): Promise<IResponseValidation> {
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
  if (!quantidade) {
    return { status: false, message: "'quantidade' é obrigatória" };
  }
  if (typeof quantidade !== "number") {
    return { status: false, message: "'quantidade' deve ser do tipo 'number'" };
  }

  return { status: true };
}
