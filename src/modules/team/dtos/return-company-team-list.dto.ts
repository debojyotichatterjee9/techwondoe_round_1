import { Expose, Type } from "class-transformer";
class TeamType {
    @Expose()
    id: String;
    @Expose()
    name: String;
    @Expose()
    team_lead_name: String;
}
export class CompanyTeamListDto {
    @Expose()
    total: Number;
    @Expose()
    limit: Number;
    @Expose()
    page: Number;
    @Expose()
    @Type(() => TeamType)
    teams: Array<TeamType>;
}