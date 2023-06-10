import { Controller, Get, Post, Body, Param, UseInterceptors } from '@nestjs/common';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { ReturnCreateCompanyDto } from './dtos/return-create-company.dto';
import { CompanyDto } from './dtos/return-company.dto';
import { CompanyService } from './company.service';
import { Serialize } from 'src/serialize.interceptor';


@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) { }

  // @UseInterceptors(new SerializeInterceptor(ReturnCreateCompanyDto))
  @Serialize(ReturnCreateCompanyDto)
  @Post()
  createCompany(@Body() payload: CreateCompanyDto) {
    const newCompanyInfo = this.companyService.createCompany(payload);
    return newCompanyInfo;
  }

  @Get()
  listCompanies() {

  }
  @Serialize(CompanyDto)
  @Get('/:id')
  getCompanyDetails(@Param('id') id: String) {
    return this.companyService.getCompanyDetails(id);
  }
}
