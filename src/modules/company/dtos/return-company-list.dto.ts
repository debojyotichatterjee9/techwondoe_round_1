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
export class CompanyListDto {
  @Expose()
  total: Number;
  @Expose()
  limit: Number;
  @Expose()
  page: Number;
  @Expose()
  @Type(() => CompanyType)
  companies: Array<CompanyType>;
}
