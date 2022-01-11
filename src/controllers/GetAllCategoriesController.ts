import { Request, Response } from "express";
import { GetAllCategoriesService } from "../services/GetAllCategoriesService";

export class GetAllCategoriesController {
  async handle(request: Request, response: Response){

    const service = new GetAllCategoriesService();

    const categories = await service.execute();

    if(categories.length == 0) 
      return response.status(200).json("There's no category registered.");

    return response.status(200).json(categories);
  }
}