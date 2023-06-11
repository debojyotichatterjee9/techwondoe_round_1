import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './team.schema';
import { CreateTeamDto } from './dtos/create-team.dto';


@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) { }

  async listAllTeams(name: string, page: number, limit: number) {
    let queryFilters = {};
    let skipRecords = 0;
    if (name) {
      queryFilters = { name: { '$regex': `.*${name}.*`, '$options': 'i' } };
    }

    page = page ? Number(page) : 1;
    limit = limit ? Number(limit) : 10;
    if (page > 1) {
      skipRecords = (page - 1) * limit
    }
    const teamList = await this.teamModel.find(queryFilters).populate("company_id").skip(skipRecords).limit(limit).exec();
    const totalTeamCount = await this.teamModel.find(queryFilters).count().exec();
    const companyTeamListResp = {
      total: totalTeamCount,
      limit: limit,
      page: page,
      teams: teamList
    }
    return (companyTeamListResp);
  }
}
