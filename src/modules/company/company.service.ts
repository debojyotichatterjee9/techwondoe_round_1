import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { version as uuidVersion } from 'uuid';
import { validate as uuidValidate } from 'uuid';
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
    const companyListResp = {
      total: totalCompanyCount,
      limit: limit,
      page: page,
      companies: companyList
    }
    return (companyListResp);
  }

  async getCompanyDetails(id: String) {
    if (!uuidValidate(id) && uuidVersion(id) != 4) {
      throw new BadRequestException("Invalid UUID provided.")
    }
    const companyInfo = await this.companyModel.findById(id).exec();
    if (companyInfo) {
      return companyInfo;
    }
    else {
      throw new NotFoundException("A company with the requested ID does not exist.");
    }
  }
}
