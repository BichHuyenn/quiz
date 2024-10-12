import { Column, Entity, ManyToOne, JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { SubmissionEntity } from "./submission.entity";

  
  @Entity({ name: 'answer' })  //({object key: 'object value'})
  export class AnswerEntity {
   @PrimaryGeneratedColumn()
   id: string

   @Column()
    content: string;

   @ManyToOne(()=>SubmissionEntity)
    @JoinColumn({name: 'submission_id'})
    submissionEntity: SubmissionEntity
}

