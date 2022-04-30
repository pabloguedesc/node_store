import { ProductInList } from "../entities/ProductInList";
import { Purchase } from "../entities/Purchase";
import { IAddProductToList } from "../interfaces/IAddProdutToList";

export interface IPurchasesRepository {
  createPurchase(): Promise<Purchase>;
  addProductToList(data: IAddProductToList);
  findProductInListByIdProduct(id_produto: number): Promise<ProductInList>;
  findPurchaseById(id_compra: number): Promise<Purchase>;
  listAllPurchases(): Promise<Purchase[]>;
}
