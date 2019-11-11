import { Injectable, Logger, NestMiddleware, HttpException } from '@nestjs/common';
import { responseError } from '../helpers/response.helper';
import { getRepository } from 'typeorm';
import { AccessToken } from '../models/access-token';
import { User } from '../models/user';
import { UserData } from '../dto/user-data.dto';

@Injectable()
export class AuthMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: any) {
    const token = req.header('Authorization') || req.query.access_token;
    if (!token) return responseError('Required Access Token', 401);

    try {
      const dataToken = await getRepository(AccessToken).findOne({
        where: {
          token,
        },
      });

      const dataUserToken = await getRepository(User).findOne({
        where: {
          id: dataToken.userId,
        },
      });

      req.userData = new UserData(dataUserToken.id,
        dataUserToken.name,
        dataUserToken.email,
        dataUserToken.emailVerified,
        dataUserToken.telepon);
      next();
    } catch (e) {
      throw new HttpException({ message: e.message }, 401);
    }

  }
}
