import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPurchasesUseCase } from "./ListPurchasesUseCase";

export class ListPurchasesController {
  async handle(request: Request, response: Response): Promise<Response> {
    const listPurchasesUseCase = container.resolve(ListPurchasesUseCase);
    const allPurchases = await listPurchasesUseCase.execute();
    return response.status(200).json(allPurchases);
  }
}
const listPurchasesController = new ListPurchasesController();
export { listPurchasesController };
