import { getRepository } from "typeorm";
import { Video } from "../entities/Video";

export class GetAllVideosService {
  async execute() {

    const videos = await getRepository(Video)
      .createQueryBuilder("videos")
      .innerJoin("videos.category", "category")
      .select(["videos.id", "videos.name", "videos.duration", "category.name"])
      .getMany();

    return videos;
  }
}
