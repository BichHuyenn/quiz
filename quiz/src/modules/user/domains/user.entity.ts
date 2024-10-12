import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
// import { SumissionEntity } from "./quiz/src/modules/sumission/domains/sumission.entity";
import { SubmissionEntity } from "src/modules/submission/domains/submission.entity";




@Entity({ name: 'user' })  //({object key: 'object value'})
export class UserEntity {
 @PrimaryGeneratedColumn()
 id: string

 @OneToMany(()=> SubmissionEntity, (submission)=>submission.userEntity)
 userEntities: UserEntity[]

}