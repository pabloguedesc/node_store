import { Request, Response } from "express";
import { container } from "tsyringe";
import { FinalizePurchaseUseCase } from "./FinalizePurchaseUseCase";

export class FinalizePurchaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_compra } = request.params;
    const finalizePurchaseUseCase = container.resolve(FinalizePurchaseUseCase);
    await finalizePurchaseUseCase.execute(Number(id_compra));
    return response.status(200).json({ message: "finalizada" });
  }
}

const finalizePurchaseController = new FinalizePurchaseController();

export { finalizePurchaseController };
