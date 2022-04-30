import { Request, Response } from "express";
import { container } from "tsyringe";
import { CreateProductUseCase } from "./CreateProductUseCase";

class CreateProductController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { nome, descricao, preco } = request.body;

    const createProductUseCase = container.resolve(CreateProductUseCase);

    await createProductUseCase.execute({
      descricao,
      nome,
      preco,
    });

    return response.status(201).json({ message: "Criado" });
  }
}

const createProductController = new CreateProductController();

export { createProductController };
