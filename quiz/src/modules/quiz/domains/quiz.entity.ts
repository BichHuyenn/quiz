import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { QuestionEntity } from "./question.entity";

  
  @Entity({ name: 'quiz' })  //({objcect key: 'object value'})
  export class QuizEntity {
   @PrimaryGeneratedColumn()
   id: string

   @OneToMany(()=> QuestionEntity, (question)=>question.quizEntity)
   questionEntities: QuestionEntity[]
  
}

