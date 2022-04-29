import { Router } from "express";
import { productRoutes } from "./product.routes";
import { purchaseRoutes } from "./purchase.routes";

const router = Router();

router.use("/product", productRoutes);
router.use("/purchase", purchaseRoutes);

export { router };
