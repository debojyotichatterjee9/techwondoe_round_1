import { IsString, IsDate } from 'class-validator';
export class CreateCompanyDto {
  @IsString()
  name: String;
  @IsString()
  ceo: String;
  @IsString()
  @IsString()
  address: String;
  @IsDate()
  inception: String;
}
