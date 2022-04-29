import { container } from "tsyringe";
import { ProductsRepositoryInPrisma } from "../../../modules/product/repositories/implementations/ProductsRepositoryInPrisma";
import { IProductsRepository } from "../../../modules/product/repositories/IProductsRepository";

container.registerSingleton<IProductsRepository>(
  "ProductsRepositoryInPrisma",
  ProductsRepositoryInPrisma,
);
