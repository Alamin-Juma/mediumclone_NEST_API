import { Module } from '@nestjs/common';

import { TypeOrmModule } from '@nestjs/typeorm';
import ormconfig from '../ormconfig';
import dataSource from 'ormconfig';
import { UserModule } from './user/user.module';
import { TagModule } from './tag/tag.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';

// @Module({
//   imports: [
//     TypeOrmModule.forRootAsync({
//       useFactory: () => dataSource,
//     }),
//     TagModule,
//   ],
//   controllers: [AppController],
//   providers: [AppService],
// })
// export class AppModule {}
@Module({
  imports: [
    TypeOrmModule.forRoot(dataSource.options),
    TagModule,
    UserModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}