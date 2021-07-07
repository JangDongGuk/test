import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/user.module';
/*import { User } from './users/user.entity';
import { UsersController } from './users/users.controller';
import { UsersService } from './users/users.service';*/

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    UsersModule
  ],
  controllers: [AppController],
  providers: [AppService ],
})

export class AppModule {}


//UsersController
//UsersService