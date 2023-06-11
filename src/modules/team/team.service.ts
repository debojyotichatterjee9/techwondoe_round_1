import { Injectable } from '@nestjs/common';
import { Model } from "mongoose";
import { InjectModel } from '@nestjs/mongoose';
import { Team } from './team.schema';
import { CreateTeamDto } from './create-team.dto';


@Injectable()
export class TeamService {
  constructor(@InjectModel(Team.name) private teamModel: Model<Team>) { }
  async createTeam(createTeamDto: CreateTeamDto): Promise<Team> {
    const newTeam = this.teamModel.create(createTeamDto);
    return newTeam;
  }
}
