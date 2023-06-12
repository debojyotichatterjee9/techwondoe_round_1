import { Controller, Post, Get, Body, Param, Query, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { TeamService } from './team.service';
import { TeamListDto } from './dtos/return-team-list.dto';
import { TeamDto } from './dtos/return-team.dto';
import { Serialize } from 'src/interceptors/serialize.interceptor';

@UseGuards(AuthGuard('jwt'))
@Controller('team')
export class TeamController {
  constructor(private teamService: TeamService) { }

  @Serialize(TeamListDto)
  @Get('/list')
  listCompanies(@Query('name') name: string, @Query('page') page: number, @Query('limit') limit: number) {
    return this.teamService.listAllTeams(name, page, limit);
  }

  @Serialize(TeamDto)
  @Get('/:id')
  getTeamDetails(@Param('id') id: string) {
    return this.teamService.getTeamDetails(id);
  }
}
