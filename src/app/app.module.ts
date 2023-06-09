import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CompanyModule } from '../modules/company/company.module';
import { TeamModule } from 'src/modules/team/team.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/techwondoe_round_1'),
    CompanyModule, TeamModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
