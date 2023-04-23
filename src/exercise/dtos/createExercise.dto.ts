import { IsInt, IsNotEmpty, IsString } from '@nestjs/class-validator'

export class CreateExerciseDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsNotEmpty()
  @IsInt()
  length: number
}
