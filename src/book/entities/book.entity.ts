import { Schedule } from "src/show/entities/schedule.entity";
import { User } from "src/user/entities/user.entitiy";
import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity('books')
export class Book {
  @PrimaryGeneratedColumn({unsigned:true})
  id:number

  @Column({unsigned:true})
  userId:number

  @Column({unsigned:true})
  scheduleId:number

  @CreateDateColumn()
  createdAt:Date

  @UpdateDateColumn()
  updatedAt:Date

  @ManyToOne((type)=>User, user=>user.books, {onDelete:'CASCADE'})
  users:User

  @ManyToOne((type)=>Schedule, /*schedule=>schedule.books 예매내역을 굳이 볼 필요없어서 생략가능*/ {onDelete:'CASCADE'})
  schedules:Schedule
}   