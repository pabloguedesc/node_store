import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPurchasesUseCase } from "./ListPurchasesUseCase";

class ListPurchasesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { key } = request.params;
    const listProductsUseCase = container.resolve(ListPurchasesUseCase);

    const allPurchases = await listProductsUseCase.execute(key);

    return response.status(200).json(allPurchases);
  }
}

const listPurchasesController = new ListPurchasesController();
export { listPurchasesController };
