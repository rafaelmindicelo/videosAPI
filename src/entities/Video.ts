import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";
import { Category } from "./Category";

@Entity("videos")
export class Video {

  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column()
  description: string;
  
  @Column()
  duration: number;
  
  @Column()
  category_id: string;

  @ManyToOne(()=> Category) //referenciando a classe Categoria, informando que serão vários vídeos para uma categoria
  @JoinColumn({name: "category_id"})
  category: Category;
  
  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}