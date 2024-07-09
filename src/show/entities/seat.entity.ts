import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Schedule } from "./schedule.entity";


@Entity('seats')  
export class Seat {
  @PrimaryGeneratedColumn({unsigned:true})
  id:number

  @Column({unsigned:true})
  scheduleId:number

  @Column({unsigned:true})
  avaliableSeat:number

  @Column()
  totalSeat:string

  @CreateDateColumn()
  createdAt:Date

  @UpdateDateColumn()
  updatedAt:Date

  @OneToOne((type)=>Schedule, schedule=>schedule.seats)
  @JoinColumn()// schedule이 외래 키 컬럼임을 나타내며, 관계를 정의하는 데 사용된다 .
  schedules:Schedule
}