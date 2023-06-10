import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { UUID } from 'crypto';
import { HydratedDocument } from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

export type CompanyDocument = HydratedDocument<Company>;

@Schema()
export class Company {
  @Prop({ default: uuidv4 })
  _id: UUID
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
