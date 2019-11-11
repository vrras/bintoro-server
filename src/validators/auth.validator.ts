import { IsIn, IsNotEmpty } from 'class-validator';

export class AuthLoginValidator {
  @IsNotEmpty()
  email: string;

  @IsNotEmpty()
  password: string;
}
