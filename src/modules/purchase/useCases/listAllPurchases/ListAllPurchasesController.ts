import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListAllPurchasesUseCase } from "./ListAllPurchasesUseCase";

class ListAllPurchasesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listAllPurchasesUseCase = container.resolve(ListAllPurchasesUseCase);

    const allPurchases = await listAllPurchasesUseCase.execute();

    return response.status(200).json(allPurchases);
  }
}

const listAllPurchasesController = new ListAllPurchasesController();
export { listAllPurchasesController };
