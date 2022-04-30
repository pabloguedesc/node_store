import { Router } from "express";
import { addProductController } from "../../modules/purchase/useCases/addProduct/AddProductController";
import { createPurchaseController } from "../../modules/purchase/useCases/createPurchase/CreatePurchaseController";
import { listPurchasesController } from "../../modules/purchase/useCases/listPurchases/ListPurchasesController";

const purchaseRoutes = Router();

purchaseRoutes.post("/", createPurchaseController.handle);
purchaseRoutes.get("/:key?", listPurchasesController.handle);
purchaseRoutes.post("/list/:id_compra", addProductController.handle);

export { purchaseRoutes };
