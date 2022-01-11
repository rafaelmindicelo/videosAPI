import { getRepository } from "typeorm";
import { Category } from "../entities/Category";
import { Video } from "../entities/Video";

type VideoUpdateRequest = {
  id: string; 
  name: string; 
  description: string; 
  category_id: string; 
  duration: number;
}

export class UpdateVideoService {
  async execute({ id, name, description, category_id, duration } : VideoUpdateRequest) : Promise<Video | Error> {
    const repo = getRepository(Video);

    const video = await repo.findOne(id);

    if(!video) 
      return new Error("Video doesn't exist")
    
    if(category_id){
      const repo = getRepository(Category);
      const category = await repo.findOne(category_id);
      
      if(!category) 
        return new Error("Category doesn't exist")
    }

    video.name = name ? name : video.name;
    video.description = description ? description : video.description;
    video.category_id = category_id ? category_id : video.category_id;
    video.duration = duration ? duration : video.duration;

    await repo.save(video);

    return video;


    
      
       return video;
  }
}