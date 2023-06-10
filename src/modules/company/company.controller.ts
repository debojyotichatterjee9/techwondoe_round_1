import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { CompanyService } from './company.service';

@Controller('company')
export class CompanyController {
  constructor(public companyService: CompanyService) { }
  @Post()
  createCompany(@Body() body: CreateCompanyDto) {
    console.log(body);
    return this.companyService.create(body);
  }
  @Get()
  listCompanies() {

  }
  @Get('/:id')
  getCompanyDetails(@Param('id') id: String) {
    console.log(id);
  }
}
