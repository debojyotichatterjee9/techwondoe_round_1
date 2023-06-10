import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Company } from './company.schema';
import { CreateCompanyDto } from './dtos/create-company.dto';
@Injectable()
export class CompanyService {
  constructor(@InjectModel(Company.name) private companyModel: Model<Company>) { }

  async createCompany(createCompanyDto: CreateCompanyDto): Promise<Company> {
    const newCompany = new this.companyModel(createCompanyDto);
    const newCompanyInfo = newCompany.save();
    return newCompanyInfo;
  }

  async getCompanyDetails(id: String) {
    return this.companyModel.findById(id);
  }
}
