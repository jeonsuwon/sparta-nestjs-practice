import { Body, Controller, HttpStatus, Post, Request, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { SignUpDto } from './Dto/sign-up.dto';
import { SignInDto } from './Dto/sign-in.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Post('/sign-up')
    async signUp(@Body() {email, password, passwordConfirm, name}:SignUpDto){
      const data = await this.authService.signUp(email, password, passwordConfirm, name);
      return {statusCode:HttpStatus.CREATED, message:"회원가입에 정상적으로 완료되었습니다.", data:{...data, password:undefined}}
    }

  @UseGuards(AuthGuard('customLocal'))
  @Post('/sign-in')
    async signIn(@Request() req, @Body() SignInDto:SignInDto){
      return req.user
    }
}
