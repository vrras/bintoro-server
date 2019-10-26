import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import * as objectPath from 'object-path';
import { responseError } from '../helpers/response.helper';
import HttpClient from '../helpers/http.helper';
import { UserData } from '../dto/user-data.dto';

@Injectable()
export class UrlAuthMiddleware implements NestMiddleware {
  async use(req: any, res: any, next: any) {
    const token = req.header('Authorization') || req.query.access_token;
    if (!token) return responseError('Required Access Token', 401);

    const urlauth = req.header('Authorization-URL') || req.query.urlauth;
    if (!urlauth) return responseError('Required Url Authorization', 401);

    let userData: UserData;

    // get user information
    try {
      const response = await HttpClient.get(urlauth, { headers: { Authorization: token } });
      if (response.data.result) {
        userData = response.data.result;
      } else {
        userData = response.data.data;
      }
    } catch (e) {
      Logger.error(e.message, JSON.stringify({ baseUrl: urlauth, error: objectPath.get(e, 'response.data.error') }), 'UrlAuthMiddleware');

      let statusCode: number;
      let message: string;
      if (e.response.data.error) {
        if (e.response.data.error.status) {
          statusCode = objectPath.get(e, 'response.data.error.status');
          message = objectPath.get(e, 'response.data.error.message');
        } else {
          statusCode = objectPath.get(e, 'response.data.statusCode');
          message = objectPath.get(e, 'response.data.message');
        }
      } else {
        return responseError(e.response.data.message, 500);
      }

      if (statusCode === 500) {
        return responseError('Invalid access token', 500);
      } else if (statusCode === 404) {
        return responseError('Invalid url access', 404);
      } else {
        return responseError(message, statusCode);
      }
    }

    req.userData = userData;

    next();
  }
}
