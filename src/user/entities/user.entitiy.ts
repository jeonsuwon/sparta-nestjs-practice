import { IsBoolean, IsEmail, IsNotEmpty, IsNumber, IsString, IsStrongPassword } from "class-validator";
import { Book } from "src/book/entities/book.entity";
import { DEFAULT_CUSTOMER_POINT } from "src/constants/point.constants";
import { Column, CreateDateColumn, Entity, OneToMany, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {
  @PrimaryGeneratedColumn({unsigned: true}) // 음수값을 허용하지않음
  id: number;

  @IsNotEmpty({message: '이메일을 확인해주세요.'})
  @IsEmail({},{message: '이메일 형식에 맞지않습니다.'})
  @Column({unique:true})
  email: string;

  @IsNotEmpty({message: '비밀번호를 확인해주세요.'})
  @IsStrongPassword({},{message:'비밀번호는 영문 알파벳 대,소문자,숫자, 특수문자등을 사용해주세요.'})
  @Column()
  password: string;

  @IsString()
  @IsNotEmpty()
  @Column()
  name: string;

  @IsNumber()
  @Column({unsigned: true, default:DEFAULT_CUSTOMER_POINT})
  point: number;

  @IsBoolean()
  @Column({default:false})
  isAdmin: boolean;
  
  @CreateDateColumn()
  createAt: Date;

  @UpdateDateColumn()
  updateAt: Date;

  @OneToMany((type) => Book, book=>book.users)
  books:Book[];
}