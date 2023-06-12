import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthorizationModule } from 'src/modules/authorization/authorization.module';
import { CompanyModule } from '../modules/company/company.module';
import { TeamModule } from 'src/modules/team/team.module';
import * as dotenv from 'dotenv';

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_DOCKER_URI),
  AuthorizationModule, CompanyModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
