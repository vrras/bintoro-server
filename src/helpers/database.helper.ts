import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConnectionOptions } from 'typeorm';

export const getTypeOrmModuleOptions = (type: string) => {
  let config: TypeOrmModuleOptions = {
    type: 'mysql',
    charset: 'utf8mb4',
  };

  switch (type) {
    case 'postgres': config = { type: 'postgres' }; break;
    case 'mssql': config = { type: 'mssql' }; break;
    case 'oracle': config = { type: 'oracle' }; break;
  }

  return config;
};

export const getConnectionOptions = (type: string) => {
  let config: ConnectionOptions = {
    type: 'mysql',
    charset: 'utf8mb4',
  };

  switch (type) {
    case 'postgres': config = { type: 'postgres' }; break;
    case 'mssql': config = { type: 'mssql' }; break;
    case 'oracle': config = { type: 'oracle' }; break;
  }

  return config;
};
