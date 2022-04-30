import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindPurchaseByIdUseCase } from "./FindPurchaseByIdUseCase";

export class FindPurchaseByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_compra } = request.params;
    const findPurchaseByIdUseCase = container.resolve(FindPurchaseByIdUseCase);
    const purchase = await findPurchaseByIdUseCase.execute(Number(id_compra));
    return response.status(200).json(purchase);
  }
}

const findPurchaseByIdController = new FindPurchaseByIdController();

export { findPurchaseByIdController };
