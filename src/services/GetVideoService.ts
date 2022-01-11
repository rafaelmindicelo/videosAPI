import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class GetVideoService {
  async execute(id: string) : Promise<Video> {
    const video = await getRepository(Video)
      .createQueryBuilder("video")
      .innerJoin("video.category", "category")
      .select([
        "video",
        "category.name"
      ])
      .where("video.id = :id", { id })
      .getOne();    
      
      return video;
  }
}
