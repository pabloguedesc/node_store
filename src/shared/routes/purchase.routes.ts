import { Router } from "express";
import { addProductController } from "../../modules/purchase/useCases/addProduct/AddProductController";
import { createPurchaseController } from "../../modules/purchase/useCases/createPurchase/CreatePurchaseController";
import { findPurchaseByIdController } from "../../modules/purchase/useCases/findPurchasebyId/FindPurchaseByIdController";
import { listAllPurchasesController } from "../../modules/purchase/useCases/listAllPurchases/ListAllPurchasesController";
import { listPurchasesWithFilterController } from "../../modules/purchase/useCases/listPurchasesWithFilter/ListPurchasesWithFilterController";

const purchaseRoutes = Router();

purchaseRoutes.post("/", createPurchaseController.handle);
purchaseRoutes.get("/filter/:key?", listPurchasesWithFilterController.handle);
purchaseRoutes.get("/", listAllPurchasesController.handle);
purchaseRoutes.get("/:id_compra", findPurchaseByIdController.handle);
purchaseRoutes.post("/list/:id_compra", addProductController.handle);

export { purchaseRoutes };
