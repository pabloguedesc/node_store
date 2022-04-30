import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditPurchaseUseCase } from "./EditPurchaseUseCase";

export class EditPurchaseConroller {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_compra } = request.params;
    const { tipo_pagamento } = request.body;

    const editPurchaseUseCase = container.resolve(EditPurchaseUseCase);

    await editPurchaseUseCase.execute({
      id_compra: Number(id_compra),
      tipo_pagamento,
    });

    return response.status(200).json({ message: "compra atualizada" });
  }
}

const editPurchaseController = new EditPurchaseConroller();

export { editPurchaseController };
