import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {v4 as uuidv4} from 'uuid';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @Prop({primary: true, default: uuidv4()})
  _id: String
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
