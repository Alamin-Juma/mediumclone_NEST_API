// // ormconfig.ts
// import { TypeOrmModuleOptions } from '@nestjs/typeorm';

// const ormconfig: TypeOrmModuleOptions = {
//   type: 'postgres',
//   host: 'localhost',
//   port: 5432,
//   username: 'postgres',
//   password: 'QWEiop5991',
//   database: 'mediumclone',
//   entities: [__dirname + '/**/*.entity{.ts,.js}'],
//   synchronize: true, // Set to false in production
// };

// export default ormconfig;


// newer versions of TypeORM CLI require a different format for the dataSource flag.
import { DataSource } from 'typeorm';

const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  password: 'QWEiop5991',
  database: 'mediumclone',
  entities: [__dirname + '/**/*.entity{.ts,.js}'],
  synchronize: false, // for production
  migrations: [__dirname + '/src/migrations/**/*.ts'], // updated path
  migrationsTableName: 'migrations'
});

export default dataSource;
