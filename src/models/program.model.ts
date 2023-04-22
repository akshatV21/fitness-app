import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Document } from 'mongoose'
import { Exercise } from './exercise.model'

export type ProgramDocument = Program & Document

@Schema({ timestamps: true })
export class Program {
  @Prop({ required: true })
  name: string

  @Prop({ default: [], ref: '' })
  exercises: Exercise[]
}

export const ProgramSchema = SchemaFactory.createForClass(Program)
