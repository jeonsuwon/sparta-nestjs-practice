import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { ShowCategory } from "../types/show-category.type";
import { Schedule } from "./schedule.entity";


@Entity('shows')
export class Show {
  @PrimaryGeneratedColumn({unsigned:true})
  id:number

  @Column({unique:true})
  showTitle:string

  @Column({type:'text'})
  showContent:string

  @Column({type:'enum', enum:ShowCategory})
  showCategory:ShowCategory

  @Column()
  showPrice:number

  @Column()
  showImage:string

  @CreateDateColumn()
  createdAt:Date

  @UpdateDateColumn()
  updatedAt:Date

  @OneToMany((type)=>Schedule, schedule=>schedule.shows,{cascade:true})//show를 등록할때 schedule 정보를 같이 입력하면은 schedule table에 schedule 정보를 넣어준다.
  schedules:Schedule[]
  
}
