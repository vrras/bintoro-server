import { Controller, Get, Post, Req, Body } from '@nestjs/common';
import { AuthLoginValidator } from '../validators/auth.validator';
import { response, responseError } from '../helpers/response.helper';
import { AuthService } from '../services/auth.service';

@Controller('auth')
export class AuthController {

  constructor(private authService: AuthService) { }

  @Post('login')
  async login(@Body() body: AuthLoginValidator) {
    try {
      const email = body.email;
      const password = body.password;
      const token = await this.authService.login(email, password);
      return response('Login successfully', token);
    } catch (e) {
      return responseError(e.message, e.status);
    }
  }

  @Get('profile')
  async profile(@Req() req: any) {
    try {
      return response('User data', req.userData);
    } catch (e) {
      return responseError(e.message, e.status);
    }
  }
}
