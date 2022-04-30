import { Router } from "express";
import { createPurchaseController } from "../../modules/purchase/useCases/createPurchase/CreatePurchaseController";
import { deletePurchaseController } from "../../modules/purchase/useCases/deletePurchase/DeletePurchaseController";
import { editPurchaseController } from "../../modules/purchase/useCases/editPurchase/EditPurchaseController";
import { finalizePurchaseController } from "../../modules/purchase/useCases/finalizePurchase/FinalizePurchaseController";
import { findPurchaseByIdController } from "../../modules/purchase/useCases/findPurchaseById/FindPurchaseByIdController";
import { listPurchasesController } from "../../modules/purchase/useCases/listPurchases/ListPurchasesController";

const purchaseRoutes = Router();

purchaseRoutes.post("/", createPurchaseController.handle);
purchaseRoutes.post("/:id_compra", finalizePurchaseController.handle);
purchaseRoutes.put("/:id_compra", editPurchaseController.handle);
purchaseRoutes.get("/", listPurchasesController.handle);
purchaseRoutes.get("/:id_compra", findPurchaseByIdController.handle);
purchaseRoutes.delete("/:id_compra", deletePurchaseController.handle);

export { purchaseRoutes };
