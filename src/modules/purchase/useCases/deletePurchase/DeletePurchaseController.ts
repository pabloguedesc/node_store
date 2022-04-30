import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeletePurchaseUseCase } from "./DeletePurchaseUseCase";

export class DeletePurchaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_compra } = request.params;
    const deletePurchaseUseCase = container.resolve(DeletePurchaseUseCase);
    await deletePurchaseUseCase.execute(Number(id_compra));
    return response.status(200).json({ message: "deletada" });
  }
}

const deletePurchaseController = new DeletePurchaseController();
export { deletePurchaseController };
