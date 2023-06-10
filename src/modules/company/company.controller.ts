import { Controller, Get, Post, Body, Param, UseInterceptors } from '@nestjs/common';
import { CreateCompanyDto } from './dtos/create-company.dto';
import { CompanyService } from './company.service';
import { SerializeInterceptor } from 'src/serialize.interceptor';

@Controller('company')
export class CompanyController {
  constructor(private companyService: CompanyService) { }

  @UseInterceptors(SerializeInterceptor)
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
