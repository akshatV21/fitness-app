import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'

export type ExerciseDocument = Exercise & Document

@Schema({ timestamps: true })
export class Exercise {
  @Prop({ required: true })
  name: string

  @Prop({ required: true })
  length: number
}

export const ExerciseSchema = SchemaFactory.createForClass(Exercise)
