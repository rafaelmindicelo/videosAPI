import { Request, Response } from "express";
import { EntityColumnNotFound, EntityNotFoundError } from "typeorm";
import { GetVideoService } from "../services/GetVideoService";

export class GetVideoController {
  async handle(request: Request, response: Response) {
    const { id } = request.params;
    
    const service = new GetVideoService();

    const result = await service.execute(id);
    
    if(!result) 
      return response.json("Video not found.")
    
    return response.json(result);
  }
}
