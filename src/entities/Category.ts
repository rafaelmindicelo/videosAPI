import { Entity, Column, CreateDateColumn, PrimaryColumn } from "typeorm";
import { v4 as uuid } from "uuid";

//informando ao typeorm que essa classe está referenciando a tabela "categories"
@Entity("categories")
export class Category {
  @PrimaryColumn()
  id: string;

  @Column()
  name: string;

  @Column() //dentro de () referenciamos o nome da coluna que está no bd, se igual, podemos omitir
  description: string;

  @CreateDateColumn()
  created_at: Date;

  constructor(){
    if(!this.id){
      this.id = uuid();
    }
  }
}