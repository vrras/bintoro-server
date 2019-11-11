import { Injectable, HttpException } from '@nestjs/common';
import { User } from '../models/user';
import { getRepository, getConnection } from 'typeorm';
import { JwtService } from '@nestjs/jwt';
import { currentDate } from '../helpers/date.helper';
import { AccessToken } from '../models/access-token';

@Injectable()
export class AuthService {

  constructor(private readonly jwtService: JwtService) { }

  async login(email: string, password: string) {
    const emailDitemukan = await getRepository(User).findOne({
      where: {
        email,
      },
    });

    const passwordSesuai = await getRepository(User).findOne({
      where: {
        email,
        password,
      },
    });

    const emailVerified = await getRepository(User).findOne({
      where: {
        email,
        password,
        emailVerified: 1,
      },
    });

    if (emailDitemukan) {
      if (passwordSesuai) {
        if (emailVerified) {
          const payload: string = `${emailDitemukan.name}${emailDitemukan.id}${new Date().getTime()}`;
          const accessToken: string = this.jwtService.sign(payload);

          const paramsSaveToken: any = {
            token: accessToken,
            userId: emailDitemukan.id,
            type: 'JWT',
            createdAt: currentDate().toISOString(),
            updatedAt: currentDate().toISOString(),
          };

          await getConnection().createQueryBuilder()
            .insert()
            .into(AccessToken)
            .values(paramsSaveToken)
            .execute();

          return {
            token: accessToken,
          };
        } else {
          throw new HttpException('Email belum diverifikasi', 422);
        }
      } else {
        throw new HttpException('Password tidak sesuai', 422);
      }
    } else {
      throw new HttpException('Email belum terdaftar', 422);
    }
  }
}
