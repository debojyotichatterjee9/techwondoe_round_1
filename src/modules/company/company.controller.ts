import { Controller, Get, Post, Body, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { ReturnCreateCompanyDto } from './dtos/return-create-company.dto';
import { CompanyListDto } from './dtos/return-company-list.dto';
import { CompanyDto } from './dtos/return-company.dto';
import { CreateTeamDto } from '../team/dtos/create-team.dto';
import { ReturnCreateTeamDto } from '../team/dtos/return-create-team.dto';
import { CompanyTeamListDto } from '../team/dtos/return-company-team-list.dto';
import { CompanyService } from './company.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';


@UseGuards(AuthGuard('jwt'))
@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) { }

  // @UseInterceptors(new SerializeInterceptor(ReturnCreateCompanyDto))
  @Serialize(ReturnCreateCompanyDto)
  @Post('/create')
  createCompany(@Body() payload: CreateCompanyDto) {
    const newCompanyInfo = this.companyService.createCompany(payload);
    return newCompanyInfo;
  }

  @Serialize(CompanyListDto)
  @Get('/list')
  listCompanies(@Query('name') name: string, @Query('page') page: number, @Query('limit') limit: number) {
    return this.companyService.listCompanies(name, page, limit);
  }
  @Serialize(CompanyDto)
  @Get('/:id')
  getCompanyDetails(@Param('id') id: string) {
    return this.companyService.getCompanyDetails(id);
  }

  @Serialize(ReturnCreateTeamDto)
  @Post('/:companyId/team/create')
  createTeam(@Param('companyId') companyId: string, @Body() payload: CreateTeamDto) {
    return this.companyService.createTeam(payload, companyId);
  }

  @Serialize(CompanyTeamListDto)
  @Get('/:companyId/teams')
  getCompanyTeamList(@Param('companyId') companyId: string, @Query('name') name: string, @Query('page') page: number, @Query('limit') limit: number) {
    return this.companyService.getCompanyTeamList(companyId, name, page, limit);
  }
}
