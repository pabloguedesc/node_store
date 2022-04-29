import { Request, Response } from "express";
import { container } from "tsyringe";
import { DeleteProductByIdUseCase } from "./DeleteProductByIdUseCase";

export class DeleteProductByIdController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id_product } = request.params;

    const deleteProductById = container.resolve(DeleteProductByIdUseCase);

    await deleteProductById.execute(Number(id_product));

    return response.status(200).json({ message: "deletado" });
  }
}
const deleteProductByIdController = new DeleteProductByIdController();

export { deleteProductByIdController };
