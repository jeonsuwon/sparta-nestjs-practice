import { PickType } from "@nestjs/mapped-types";
import { IsNotEmpty, IsStrongPassword } from "class-validator";
import { User } from "src/user/entities/user.entitiy";

export class SignUpDto extends PickType(User,[
  'email','password','name'
])
{
  @IsNotEmpty({message: '재확인 비밀번호를 확인해주세요.'})
  @IsStrongPassword({},{message:'재확인 비밀번호는 영문 알파벳 대,소문자,숫자, 특수문자등을 사용해주세요.'})
  passwordConfirm: string;
}