import { Product } from "@prisma/client";
import { prismaAgent } from "../../../../shared/database/prismaAgent";
import { ICreateProduct } from "../../interfaces/ICreateProduct";
import { IEditProduct } from "../../interfaces/IEditProduct";
import { IProductsRepository } from "../IProductsRepository";

export class ProductsRepositoryInPrisma implements IProductsRepository {
  async createProduct({
    descricao,
    nome,
    preco,
  }: ICreateProduct): Promise<void> {
    await prismaAgent.product.create({
      data: {
        nome,
        descricao,
        preco,
      },
    });
  }

  async listProducts(): Promise<Product[]> {
    const allProducts = await prismaAgent.product.findMany({
      orderBy: {
        id: "desc",
      },
    });
    return allProducts;
  }

  async findProductById(id_product: number): Promise<Product> {
    return prismaAgent.product.findUnique({
      where: { id: id_product },
    });
  }

  async deleteProductById(id_product: number): Promise<void> {
    await prismaAgent.product.delete({ where: { id: id_product } });
  }

  async editProduct({
    descricao,
    id_product,
    nome,
    preco,
  }: IEditProduct): Promise<void> {
    await prismaAgent.product.update({
      where: {
        id: id_product,
      },
      data: {
        nome,
        descricao,
        preco,
      },
    });
  }

  async findProductByName(nome: string): Promise<Product> {
    return prismaAgent.product.findFirst({
      where: {
        nome,
      },
    });
  }
}
