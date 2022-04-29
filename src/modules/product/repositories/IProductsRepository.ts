import { Product } from "@prisma/client";
import { ICreateProduct } from "../interfaces/ICreateProduct";
import { IEditProduct } from "../interfaces/IEditProduct";

export interface IProductsRepository {
  createProduct(data: ICreateProduct): Promise<void>;
  listProducts(): Promise<Product[]>;
  findProductById(id_product: number): Promise<Product>;
  deleteProductById(id_product: number): Promise<void>;
  editProduct(data: IEditProduct): Promise<void>;
}
