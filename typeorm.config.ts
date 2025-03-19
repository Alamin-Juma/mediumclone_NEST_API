import { DataSource } from 'typeorm';
import dataSource from 'ormconfig';

export default {
  ...dataSource.options,
  migrations: {
    directory: 'src/migrations'
  }
};