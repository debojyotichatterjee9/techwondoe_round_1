import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type TeamDocument = HydratedDocument<Team>;

@Schema()
export class Team {
  @Prop({ required: true })
  name: String;
  @Prop()
  company_id: String;
  @Prop()
  team_lead_name: String;
}

export const TeamSchema = SchemaFactory.createForClass(Team)
