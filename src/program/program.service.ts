import { BadRequestException, Injectable } from '@nestjs/common'
import { CreateProgramDto } from './dtos/createProgram.dto'
import { InjectModel } from '@nestjs/mongoose'
import { Program, ProgramDocument } from 'src/models/program.model'
import { Model } from 'mongoose'
import { UpdateProgramNameDto } from './dtos/updateName.dto'
import { UpdateProgramExerciseDto } from './dtos/updateExercises.dto'

@Injectable()
export class ProgramService {
  constructor(@InjectModel(Program.name) private readonly ProgramModel: Model<ProgramDocument>) {}

  async create(createProgramDto: CreateProgramDto) {
    const program = new this.ProgramModel(createProgramDto)
    await program.save()

    return program
  }

  async updateName(updateNameDto: UpdateProgramNameDto) {
    const program = await this.ProgramModel.findById(updateNameDto.programId)
    if (!program) throw new BadRequestException('Invalid program id')
    program.name = updateNameDto.name

    await program.save()
    return program.name
  }

  async updateExercise(updateExerciseDto: UpdateProgramExerciseDto) {
    const program = await this.ProgramModel.findById(updateExerciseDto.programId)
    if (!program) throw new BadRequestException('Invalid program id')
    program.exercises = updateExerciseDto.exercises

    await program.save()
    return program.exercises
  }

  async delete(id: string) {
    await this.ProgramModel.deleteOne({ _id: id })
  }
}
