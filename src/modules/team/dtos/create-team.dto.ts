
import { IsString, IsDate } from 'class-validator';
export class CreateTeamDto {
  @IsString()
  name: string;
  @IsString()
  team_lead_name: string;
}
