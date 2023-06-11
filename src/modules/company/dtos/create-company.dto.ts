import { IsString, IsDate } from 'class-validator';
export class CreateCompanyDto {
  @IsString()
  name: string;
  @IsString()
  ceo: string;
  @IsString()
  address: string;
  @IsString()
  inception: string;
}
