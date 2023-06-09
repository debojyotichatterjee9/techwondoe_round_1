import { Controller, Get, Post, Body, Param } from '@nestjs/common';

@Controller('company')
export class CompanyController {
  @Post()
  createCompany(@Body() body: any) {
    console.log(body);
  }
  @Get()
  listCompanies() {

  }
  @Get('/:id')
  getCompanyDetails(@Param('id') id: String) {
    console.log(id);
  }
}
