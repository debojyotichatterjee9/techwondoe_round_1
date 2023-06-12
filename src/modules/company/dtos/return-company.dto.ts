import { Expose } from "class-transformer";

export class CompanyDto {
  @Expose()
  id: String;
  @Expose()
  name: String;
  @Expose()
  ceo: String;
  @Expose()
  inception: String;
}
