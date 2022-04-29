import { Request, Response } from "express";
import { container } from "tsyringe";
import { EditProductUseCase } from "./EditProductUseCase";

export class EditProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_product } = request.params;
    const { nome, descricao, preco } = request.body;

    const editProductUseCase = container.resolve(EditProductUseCase);

    await editProductUseCase.execute({
      descricao,
      id_product: Number(id_product),
      nome,
      preco,
    });

    return response.status(200).json({ message: "atualizado" });
  }
}

const editProductController = new EditProductController();
export { editProductController };
