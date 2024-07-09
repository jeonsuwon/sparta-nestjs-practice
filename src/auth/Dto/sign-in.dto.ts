import { PickType } from "@nestjs/mapped-types";
import { User } from "src/user/entities/user.entitiy";

export class SignInDto extends PickType(User,["email", "password"]){}