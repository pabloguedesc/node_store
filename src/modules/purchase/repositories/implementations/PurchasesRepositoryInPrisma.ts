import { Purchase } from "@prisma/client";
import { prismaAgent } from "../../../../shared/database/prismaAgent";
import { ProductInList } from "../../entities/ProductInList";
import { IAddProductToList } from "../../interfaces/IAddProdutToList";
import { IPurchasesRepository } from "../IPurchasesRepository";

export class PurchasesRepositoryInPrisma implements IPurchasesRepository {
  async createPurchase(): Promise<Purchase> {
    const purchase = await prismaAgent.purchase.create({
      data: {
        status: "em_andamento",
      },
    });
    return purchase;
  }

  async addProductToList({
    id_compra,
    id_produto,
    quantidade,
    valor,
    quantidadeEmEstoque,
  }: IAddProductToList) {
    await prismaAgent.listProducts
      .create({
        data: {
          compra: {
            connect: {
              id: id_compra,
            },
          },
          produto: {
            connect: {
              id: id_produto,
            },
          },
          quantidade,
          valor,
        },
      })
      .then(async () => {
        await prismaAgent.product.update({
          where: {
            id: id_produto,
          },
          data: {
            quantidade: quantidadeEmEstoque,
          },
        });
      });
  }

  async findProductInListByIdProduct(
    id_produto: number,
  ): Promise<ProductInList> {
    return prismaAgent.listProducts.findUnique({
      where: {
        id_produto,
      },
    });
  }

  async findPurchaseById(id_compra: number): Promise<Purchase> {
    return prismaAgent.purchase.findUnique({
      where: {
        id: id_compra,
      },
    });
  }
}
