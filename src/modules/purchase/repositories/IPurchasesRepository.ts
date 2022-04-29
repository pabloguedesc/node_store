import { Purchase } from "@prisma/client";
import { IAddProductToList } from "../interfaces/IAddProdutToList";

export interface IPurchasesRepository {
  createPurchase(): Promise<Purchase>;
  addProductToList(data: IAddProductToList);
}
