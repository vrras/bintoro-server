import Axios from 'axios';
import * as http from 'http';
import * as https from 'https';
import * as ProxyAgent from 'https-proxy-agent';
import * as querystring from 'querystring';
import * as url from 'url';
import * as zlib from 'zlib';
import { Config } from './config.helper';

let HttpClient = Axios.create();
if (Config.get('PROXY')) {
  const agent = new ProxyAgent(Config.get('PROXY'));
  HttpClient = Axios.create({ httpsAgent: agent });
}
export default HttpClient;

export async function requestSF(sfcfchost: string, path: string, headers: any, inputParam: any = null, timeout: number = 10000): Promise<any> {
  return new Promise((resolve, reject) => {
    const scSFPATH = url.parse(sfcfchost);
    const isSSL = scSFPATH.protocol.replace(':', '') === 'https';
    let req: any;
    let method: string;

    if (inputParam === '' || inputParam === null) {
      method = 'GET';
      inputParam = {};
    } else {
      method = 'POST';
      if (typeof inputParam === 'string') {
        try {
          inputParam = JSON.parse(inputParam);
        } catch (err) {
          inputParam = {};
        }
      }
    }
    inputParam = querystring.stringify(inputParam);

    if (method === 'POST') {
      headers['Content-Type'] = 'application/x-www-form-urlencoded';
      headers['Content-Length'] = Buffer.byteLength(inputParam);
    }

    const options = {
      host: scSFPATH.hostname != null ? scSFPATH.hostname : 'sfcola5.dataon.com',
      port: scSFPATH.port != null ? scSFPATH.port : scSFPATH.protocol.replace(':', '') === 'http' ? 80 : 443,
      path: path,
      method: method,
      headers: headers,
    };

    if (isSSL) {
      req = https.request(options, (response: any) => {
        let body = '';

        if (response.headers['content-encoding'] === 'gzip') {
          response = response.pipe(zlib.createGunzip());
        }

        response.on('data', (d: any) => {
          body += d;
        });

        response.on('end', () => {
          try {
            const res = JSON.parse(body);
            resolve(res);
          } catch (err) {
            resolve({});
          }
        });
      });
    } else {
      req = http.request(options, (response: any) => {
        let body = '';

        if (response.headers['content-encoding'] === 'gzip') {
          response = response.pipe(zlib.createGunzip());
        }

        response.on('data', (d: any) => {
          body += d;
        });

        response.on('end', () => {
          try {
            const res = JSON.parse(body);
            resolve(res);
          } catch (err) {
            resolve({});
          }
        });
      });
    }

    if (method === 'POST') {
      req.write(inputParam);
    }

    req.on('error', (e: Error) => {
      let result = e.message;
      if (e.message === 'ECONNRESET') {
        result = 'Server closed the socket unexpectedly';
      } else if (e.message === 'ECONNREFUSED') {
        result = 'Server did not listen';
      }
      reject(new Error(result));
    });

    req.on('timeout', () => {
      reject(new Error('Request timeout'));
    });

    req.setTimeout(timeout);
    req.end();
  });
}
