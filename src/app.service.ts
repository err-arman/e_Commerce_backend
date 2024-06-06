import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    console.log('process.env.DBNAME', process.env.DB_DATABASE)
    return 'Hello World!';
  }
}
