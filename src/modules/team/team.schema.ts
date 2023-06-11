import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {v4 as uuidv4} from 'uuid';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
@Prop({default: uuidv4})
  _id: String
  @Prop({ required: true })
  name: String;
  @Prop()
  company_id: String;
  @Prop()
  team_lead_name: String;
}

export const TeamSchema = SchemaFactory.createForClass(Team)
