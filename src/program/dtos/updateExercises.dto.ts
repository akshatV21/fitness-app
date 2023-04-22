import { IsMongoId, IsNotEmpty } from '@nestjs/class-validator'
import { Exercise } from 'src/models/exercise.model'

export class UpdateProgramExerciseDto {
  @IsNotEmpty()
  @IsMongoId()
  programId: string

  @IsNotEmpty()
  @IsMongoId({ each: true })
  exercises: Exercise[]
}
