import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePurchaseUseCase } from "./CreatePurchaseUseCase";

class CreatePurchaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { tipo_pagamento, total, produtos } = request.body;

    const createPurchaseUseCase = container.resolve(CreatePurchaseUseCase);

    await createPurchaseUseCase.execute({
      produtos,
      tipo_pagamento,
      total,
    });

    return response.status(201).json({ message: "Criada" });
  }
}

const createPurchaseController = new CreatePurchaseController();
export { createPurchaseController };
