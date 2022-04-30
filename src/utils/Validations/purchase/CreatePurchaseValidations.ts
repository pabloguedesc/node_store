import { ProductsRepositoryInPrisma } from "../../../modules/product/repositories/implementations/ProductsRepositoryInPrisma";
import { ICreatePurchaseRequest } from "../../../modules/purchase/interfaces/ICreatePurchaseRequest";
import { IResponseValidation } from "../interfaces/IResponseValidation";

const productsRepositoryInPrisma = new ProductsRepositoryInPrisma();

export async function CreatePurchaseValidations({
  produtos,
  tipo_pagamento,
  total,
}: ICreatePurchaseRequest): Promise<IResponseValidation> {
  if (
    !tipo_pagamento ||
    !["dinheiro", "debito", "credito"].includes(tipo_pagamento)
  ) {
    return { status: false, message: "Pagamento inválido!" };
  }

  if (!total) {
    return { status: false, message: "'total' é obrigatório" };
  }

  const product = await productsRepositoryInPrisma.listProducts();

  const productFound = [];

  product.forEach((productInDB) => {
    produtos.forEach((productsSent) => {
      if (productInDB.id === productsSent.id_produto) {
        productFound.push(productsSent);
      }
    });
  });

  if (produtos.length !== productFound.length) {
    return {
      status: false,
      message:
        "Produto inválido! - verifique se os produtos selecionados estão corretos",
    };
  }

  const verifyValueTotal = produtos.reduce((previousValue, produto) => {
    return previousValue + produto.preco * produto.quantidade;
  }, 0);

  if (total !== verifyValueTotal) {
    return {
      status: false,
      message:
        "Valor total incorreto - verifique se a soma dos valores está correta",
    };
  }

  return { status: true };
}
