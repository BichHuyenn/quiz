import { Column, Entity, ManyToOne, OneToMany,JoinColumn, PrimaryGeneratedColumn } from "typeorm";
import { AnswerEntity } from "./answer.entity";
import { UserEntity } from "src/modules/user/domains/user.entity";

  
  @Entity({ name: 'sumission' })  //({object key: 'object value'})
  export class SubmissionEntity {
   @PrimaryGeneratedColumn()
   id: string

   @OneToMany(()=> AnswerEntity, (answer)=>answer.submissionEntity)
   answerEntities: AnswerEntity[]

   @ManyToOne(()=> UserEntity)
   @JoinColumn({name: 'user_id'})
    userEntity: SubmissionEntity
  
}

