import { Controller, Post, Get, Body, Param, Query } from '@nestjs/common';
import { TeamService } from './team.service';
import { CreateTeamDto } from './create-team.dto';

@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) { }

  // @Post('company/:companyId/team/create')
  // createTeam(@Param('companyId') companyId: string, @Body payload: CreateTeamDto) {

  // }

}
