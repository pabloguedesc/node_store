import { Request, Response } from "express";
import { container } from "tsyringe";
import { FindProductByIdUseCase } from "./FindProductByIdUseCase";

export class FindProductByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_product } = request.params;

    const findProductByIdUseCase = container.resolve(FindProductByIdUseCase);

    const product = await findProductByIdUseCase.execute(Number(id_product));

    return response.status(200).json(product);
  }
}

const findProductByIdController = new FindProductByIdController();
export { findProductByIdController };
