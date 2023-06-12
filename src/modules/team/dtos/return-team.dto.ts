import { Expose, Type } from "class-transformer";


class CompanyType {
    @Expose()
    id: String;
    @Expose()
    name: String;
    @Expose()
    ceo: String;
    @Expose()
    inception: String;
}
export class TeamDto {
    @Expose()
    id: String;
    @Expose()
    name: String;
    @Expose()
    team_lead_name: String;
    @Expose()
    @Type(() => CompanyType)
    company_id: CompanyType;
}
