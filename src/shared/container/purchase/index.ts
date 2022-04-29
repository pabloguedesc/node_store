import { container } from "tsyringe";
import { PurchasesRepositoryInPrisma } from "../../../modules/purchase/repositories/implementations/PurchasesRepositoryInPrisma";
import { IPurchasesRepository } from "../../../modules/purchase/repositories/IPurchasesRepository";

container.registerSingleton<IPurchasesRepository>(
  "PurchasesRepositoryInPrisma",
  PurchasesRepositoryInPrisma,
);
