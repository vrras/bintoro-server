import { IsIn, IsNotEmpty } from 'class-validator';

export class AppValidator {
  @IsNotEmpty()
  username: string;

  @IsNotEmpty()
  newPassword: string;
}
