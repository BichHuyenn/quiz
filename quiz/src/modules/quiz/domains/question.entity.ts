import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { QuizEntity } from "./quiz.entity";

  
  @Entity({ name: 'question' })  //({object key: 'object value'})
  export class QuestionEntity {
    @PrimaryGeneratedColumn()
    id: string 

    @Column()
    content: string;
    
    @ManyToOne(()=>QuizEntity)
    @JoinColumn({name: 'quiz_id'})
    quizEntity:QuizEntity
}

