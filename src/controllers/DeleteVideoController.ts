import { Request, Response } from "express";
import { DeleteVideoService } from "../services/DeleteVideoService";


export class DeleteVideoController{
  async handle(request: Request, response: Response){
    const { id } = request.params;

    const service = new DeleteVideoService ();

    const result = await service.execute(id);

    if(result.affected == 0)
      return response.status(400).json("No video was deleted.")
    
    return response.json("Video successfully deleted.")
  }
}