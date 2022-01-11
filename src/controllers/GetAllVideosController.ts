import { Request, Response } from "express";
import { GetAllVideosService } from "../services/GetAllVideosService";

export class GetAllVideosController {
  async handle(request: Request, response: Response) {
    const service = new GetAllVideosService();

    const result = await service.execute();

    if (result.length == 0)
      return response.status(200).json("There's no video registered.");

    return response.status(200).json(result);
  }
}
