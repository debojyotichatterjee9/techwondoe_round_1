import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { CompanyController } from './company.controller';
import { Company, CompanySchema } from './company.schema';
import { Team, TeamSchema } from '../team/team.schema';
import { CompanyService } from './company.service';

@Module({
  imports: [MongooseModule.forFeature([{ name: Company.name, schema: CompanySchema }, { name: Team.name, schema: TeamSchema }])],
  controllers: [CompanyController],
  providers: [CompanyService]
})
export class CompanyModule { }
