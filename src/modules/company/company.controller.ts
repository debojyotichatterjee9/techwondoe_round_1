import { Controller, Get, Post, Body, Param, Query, UseInterceptors } from '@nestjs/common';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { ReturnCreateCompanyDto } from './dtos/return-create-company.dto';
import { CompanyListDto } from './dtos/return-company-list.dto';
import { CompanyDto } from './dtos/return-company.dto';
import { CompanyService } from './company.service';
import { Serialize } from 'src/interceptors/serialize.interceptor';


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
  listCompanies(@Query('name') name: String) {
    return this.companyService.listCompanies(name);
  }
  @Serialize(CompanyDto)
  @Get('/:id')
  getCompanyDetails(@Param('id') id: String) {
    return this.companyService.getCompanyDetails(id);
  }
}
