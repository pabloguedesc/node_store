import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreatePurchaseUseCase } from "./CreatePurchaseUseCase";

export class CreatePurchaseController {
  async handle(request: Request, response: Response): Promise<Response> {
    const createPurchaseUseCase = container.resolve(CreatePurchaseUseCase);

    const purchase = await createPurchaseUseCase.execute();

    return response.status(201).json(purchase);
  }
}

const createPurchaseController = new CreatePurchaseController();

export { createPurchaseController };
