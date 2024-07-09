import { Column, CreateDateColumn, Entity, ManyToOne, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Show } from "./show.entity";
import { Seat } from "./seat.entity";


@Entity('schedules')
export class Schedule {
  @PrimaryGeneratedColumn({unsigned:true})
  id:number

  @Column()
  showId:number

  @Column({type:'date'})
  date:Date

  @Column({type:'time'})
  time:Date

  @CreateDateColumn()
  createdAt:Date

  @UpdateDateColumn()
  updatedAt:Date

  @ManyToOne((type)=>Show, show=>show.schedules, {onDelete:'CASCADE'})
  shows:Show

  @OneToOne((type)=>Seat, seat=>seat.schedules)
  seats:Seat
}