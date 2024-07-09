import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy } from "passport-local";
import { AuthService } from "../auth.service";
import { SignInDto } from "../Dto/sign-in.dto";

@Injectable()
export class Localstrategy extends PassportStrategy(Strategy,'customLocal'/*디폴트값 'local'*/){
  constructor(private readonly authService:AuthService){
    super({
      usernameField: 'email',
      passwordField: 'password',
    })
  }
  async validate(email:string, password:string ) {
    const user = await this.authService.validateUser({email, password});
    if(!user) throw new UnauthorizedException('일치하는 인증 정보가 없습니다.')
    const data = {...user, password:undefined};
    return data;
  }
}
//기본적인 로그인에 필요한 바디에 있는 이메일 패스워드를 받아오는 파싱하는 간단한 스트레티지
//파싱 : 주어진 데이터를 해석하고 분석하여 원하는 형식 또는 구조로 변환하는 작업