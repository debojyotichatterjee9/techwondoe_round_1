import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) { }
  @Post()
  createCompany(@Body() payload: CreateCompanyDto) {
    const newCompanyInfo = this.companyService.create(payload);
    return newCompanyInfo;
  }
  @Get()
  listCompanies() {

  }
  @Get('/:id')
  getCompanyDetails(@Param('id') id: String) {
    console.log(id);
  }
}
