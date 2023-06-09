import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @Prop({ required: true })
  name: String;
  @Prop()
  ceo: String;
  @Prop()
  address: String;
  @Prop()
  inception: Date;
}

export const CompanySchema = SchemaFactory.createForClass(Company);
