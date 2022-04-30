import { prismaAgent } from "../../../../shared/database/prismaAgent";
import { Purchase } from "../../entities/Purchase";
import { ICreatePurchaseRequest } from "../../interfaces/ICreatePurchaseRequest";
import { IEditPurchase } from "../../interfaces/IEditPurchase";
import { IPurchasesRepository } from "../IPurchasesRepository";

export class PurchasesRepositoryInPrisma implements IPurchasesRepository {
  async createPurchase({
    produtos,
    tipo_pagamento,
    total,
  }: ICreatePurchaseRequest): Promise<void> {
    await prismaAgent.purchase.create({
      data: {
        total,
        tipo_pagamento,
        ListProducts: {
          createMany: {
            data: produtos,
          },
        },
      },
    });
  }

  async listAllPurchases(): Promise<Purchase[]> {
    return prismaAgent.purchase.findMany();
  }

  async findPurchaseById(id_compra: number): Promise<Purchase> {
    return prismaAgent.purchase.findUnique({
      where: {
        id: id_compra,
      },
      include: {
        ListProducts: {
          select: {
            id_produto: true,
            preco: true,
            quantidade: true,
            produto: {
              select: {
                nome: true,
                descricao: true,
              },
            },
          },
        },
      },
    });
  }

  async deletePurchaseById(id_compra: number): Promise<void> {
    await prismaAgent.purchase.delete({
      where: {
        id: id_compra,
      },
    });
  }

  async finalizePurchase(id_compra: number): Promise<void> {
    await prismaAgent.purchase.update({
      where: {
        id: id_compra,
      },
      data: {
        status: "finalizada",
      },
    });
  }

  async editPurchase({
    id_compra,
    tipo_pagamento,
  }: IEditPurchase): Promise<void> {
    await prismaAgent.purchase.update({
      where: { id: id_compra },
      data: {
        tipo_pagamento,
      },
    });
  }
}
