import { getConnection, getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class DeleteVideoService {
  async execute(id: string) {
    
    const video = await getConnection()
      .createQueryBuilder()
      .delete()
      .from(Video)
      .where("id = :id", {id})
      .execute();

      return video;
  }
}
