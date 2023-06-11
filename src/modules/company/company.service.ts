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

  async listCompanies(name: string, page: number, limit: number) {
    let queryFilters = {};
    let skipRecords = 0;
    if (name) {
      queryFilters = { name: { '$regex': `.*${name}.*`, '$options': 'i' } }
    }
    page = page ? Number(page) : 1;
    limit = limit ? Number(limit) : 10;
    if (page > 1) {
      skipRecords = (page - 1) * limit
    }
    const companyList = await this.companyModel.find(queryFilters).skip(skipRecords).limit(limit).exec();
    const totalCompanyCount = await this.companyModel.find(queryFilters).count().exec();
    console.log(totalCompanyCount)
    const companyListResp = {
      total: totalCompanyCount,
      limit: limit,
      page: page,
      companies: companyList
    }
    return (companyListResp);
  }

  async getCompanyDetails(id: String) {
    return this.companyModel.findById(id);
  }
}
