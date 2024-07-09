import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { SignUpDto } from './Dto/sign-up.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/entities/user.entitiy';
import { Repository } from 'typeorm';
import { ConfigService } from '@nestjs/config';
import bcrypt from 'bcrypt'
import { SignInDto } from './Dto/sign-in.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly configService:ConfigService,
    @InjectRepository(User) private readonly userRepository: Repository<User>
  ){}

  async signUp(email:string, password:string, passwordConfirm:string, name:string){

      if(password !== passwordConfirm) throw new BadRequestException('두 비밀번호가 일치하지않습니다.')
 
     const existemail = await this.userRepository.findOne({
      where: {email},
    })
      if(existemail) throw new BadRequestException('동일한 사용자가 존재합니다.')
      const passwordHash = this.configService.get<string>('PASSWORD_HASH');
      const hashedPassword = bcrypt.hashSync(password, passwordHash);
      const data = await this.userRepository.save({email, password:hashedPassword, name})
      return data
  }

  async validateUser( {email, password}: SignInDto ){
    const user = await this.userRepository.findOne({
      where: {email},
    })
    if(!user)throw new NotFoundException('해당 이메일이 존재하지 않습니다.')
    const isPasswordMatched = bcrypt.compareSync(password, user.password);
    if(!isPasswordMatched) throw new BadRequestException('패스워드가 일치하지 않습니다.')
    return user
  }
}
