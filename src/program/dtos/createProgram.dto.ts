import { IsMongoId, IsNotEmpty, IsOptional, IsString } from '@nestjs/class-validator'

export class CreateProgramDto {
  @IsNotEmpty()
  @IsString()
  name: string

  @IsOptional()
  @IsMongoId({ each: true })
  exercises: string[]
}
