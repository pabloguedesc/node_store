import { Request, Response } from "express";
import { container } from "tsyringe";
import { ListPurchasesWithFilterUseCase } from "./ListPurchasesWithFilterUseCase";

class ListPurchasesWithFilterController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { key } = request.params;

    const listPurchasesWithFilterUseCase = container.resolve(
      ListPurchasesWithFilterUseCase,
    );

    const purchases = await listPurchasesWithFilterUseCase.execute(key);

    return response.status(200).json(purchases);
  }
}

const listPurchasesWithFilterController =
  new ListPurchasesWithFilterController();
export { listPurchasesWithFilterController };
