import { Expose, Type,Transform } from "class-transformer";
class CompanyType {
    @Expose()
    id: String;
    @Expose()
    name: String;
}
class TeamType {
    @Expose()
    id: String;
    @Expose()
    name: String;
    @Expose({name: 'lead'})
    team_lead_name: String;
    @Expose()
    // @Transform(({ obj, value }) => value ? value : obj.company) // know error in package on github issues
    @Type(() => CompanyType)
    company_id: Array<CompanyType>;
}
export class TeamListDto {
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