import { Controller, Delete, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common'
import { ExerciseService } from './exercise.service'
import { CreateExerciseDto } from './dtos/createExercise.dto'
import { HttpSuccessResponse } from 'src/types'
import { ExerciseDocument } from 'src/models/exercise.model'

@Controller('exercise')
@UsePipes(new ValidationPipe())
export class ExerciseController {
  constructor(private readonly exerciseService: ExerciseService) {}

  @Post()
  async httpCreateExercise(createExerciseDto: CreateExerciseDto): Promise<HttpSuccessResponse<ExerciseDocument>> {
    const exercise = await this.exerciseService.create(createExerciseDto)
    return { success: true, message: 'Exercise created successfully', data: exercise }
  }

  @Delete(':id')
  async httpDeleteExercise(
    @Param('id') exerciseId: string,
  ): Promise<HttpSuccessResponse<Record<'exerciseId', string>>> {
    await this.exerciseService.delete(exerciseId)
    return { success: true, message: 'Exercise deleted successfully', data: { exerciseId } }
  }
}
