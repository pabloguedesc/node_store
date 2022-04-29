import { Router } from "express";
import { createProductController } from "../../modules/product/useCases/createProduct/CreateProductController";
import { deleteProductByIdController } from "../../modules/product/useCases/deleteProductById/DeleteProductByIdController";
import { editProductController } from "../../modules/product/useCases/editProduct/EditProductController";
import { findProductByIdController } from "../../modules/product/useCases/findProductById/FindProductByIdController";
import { listProductsController } from "../../modules/product/useCases/listProducts/ListProductsController";

const productRoutes = Router();

productRoutes.post("/", createProductController.handle);
productRoutes.get("/", listProductsController.handle);
productRoutes.get("/:id_product", findProductByIdController.handle);
productRoutes.put("/:id_product", editProductController.handle);
productRoutes.delete("/:id_product", deleteProductByIdController.handle);

export { productRoutes };
