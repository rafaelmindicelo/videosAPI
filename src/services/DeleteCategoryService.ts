import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

export class DeleteCategoryService {
  async execute(categoryId: string) {
    const repo = getRepository(Category);

    if (!(await repo.findOne(categoryId)))
      return new Error("Category not found.");
    
    const videoRepo = getRepository(Video);

    const result = await videoRepo
      .createQueryBuilder("video")
      .where("video.category_id = :category_id", { category_id: categoryId} )
      .getOne();

    if(result)
      return new Error("Error: Category linked to one or more videos.")

    await repo.delete(categoryId);
  }
}
