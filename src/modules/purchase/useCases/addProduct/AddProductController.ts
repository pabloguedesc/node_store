import { Request, Response } from "express";
import { container } from "tsyringe";
import { AddProductUseCase } from "./AddProductUseCase";

export class AddProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_compra } = request.params;
    const { id_produto, quantidade } = request.body;

    const addProductUseCase = container.resolve(AddProductUseCase);

    await addProductUseCase.execute({
      id_compra: Number(id_compra),
      id_produto: Number(id_produto),
      quantidade,
    });

    return response.status(201).json({ message: "Produto adicionado" });
  }
}

const addProductController = new AddProductController();
export { addProductController };
