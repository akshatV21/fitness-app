import { Controller, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { ProgramService } from './program.service'
import { CreateProgramDto } from './dtos/createProgram.dto'
import { HttpSuccessResponse } from 'src/types'
import { ProgramDocument } from 'src/models/program.model'
import { UpdateProgramNameDto } from './dtos/updateName.dto'
import { UpdateProgramExerciseDto } from './dtos/updateExercises.dto'

@Controller('program')
@UsePipes(new ValidationPipe())
export class ProgramController {
  constructor(private readonly programService: ProgramService) {}

  @Post()
  async httpCreateProgram(createProgramDto: CreateProgramDto): Promise<HttpSuccessResponse<ProgramDocument>> {
    const program = await this.programService.create(createProgramDto)
    return { success: true, message: 'Program created successfully', data: program }
  }

  @Patch('name')
  async httpUpdateName(
    updateNameDto: UpdateProgramNameDto,
  ): Promise<HttpSuccessResponse<Pick<ProgramDocument, 'name'>>> {
    const name = await this.programService.updateName(updateNameDto)
    return { success: true, message: 'Program name updated successfully', data: { name } }
  }

  @Patch('exercises')
  async httpUpdateExercises(
    updateExerciseDto: UpdateProgramExerciseDto,
  ): Promise<HttpSuccessResponse<Pick<ProgramDocument, 'exercises'>>> {
    const exercises = await this.programService.updateExercise(updateExerciseDto)
    return { success: true, message: 'Exercises updated successfully', data: { exercises } }
  }
}
