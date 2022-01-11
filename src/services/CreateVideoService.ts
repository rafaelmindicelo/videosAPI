import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoRequest = {
  name: string;
  description: string;
  category_id: string;
  duration: number;
};

export class CreateVideoService {
  async execute({
    name,
    description,
    category_id,
    duration,
  }: VideoRequest): Promise<Video | Error> {
    const repo = getRepository(Video);
    const categoryRepo = getRepository(Category);

    if (await repo.findOne({ name })) 
      return new Error("Video already exists.");

    if (!(await categoryRepo.findOne(category_id)))
      return new Error("Category does not exist.");

    const video = repo.create({
      name,
      description,
      category_id,
      duration,
    });

    await repo.save(video);

    return video;
  }
}
