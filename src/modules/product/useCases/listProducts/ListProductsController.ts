import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListProductsUseCase } from "./ListProductsUseCase";

class ListProductsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listProductsUseCase = container.resolve(ListProductsUseCase);

    const allProducts = await listProductsUseCase.execute();

    return response.status(200).json(allProducts);
  }
}

const listProductsController = new ListProductsController();
export { listProductsController };
