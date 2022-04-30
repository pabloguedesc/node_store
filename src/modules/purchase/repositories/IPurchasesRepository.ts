import { Purchase } from "../entities/Purchase";
import { ICreatePurchaseRequest } from "../interfaces/ICreatePurchaseRequest";
import { IEditPurchase } from "../interfaces/IEditPurchase";

export interface IPurchasesRepository {
  createPurchase(data: ICreatePurchaseRequest): Promise<void>;
  listAllPurchases(): Promise<Purchase[]>;
  findPurchaseById(id_compra: number): Promise<Purchase>;
  deletePurchaseById(id_compra: number): Promise<void>;
  finalizePurchase(id_compra: number): Promise<void>;
  editPurchase(data: IEditPurchase): Promise<void>;
}
