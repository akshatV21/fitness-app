import { IsMongoId, IsNotEmpty, IsString } from '@nestjs/class-validator'

export class UpdateProgramNameDto {
  @IsNotEmpty()
  @IsMongoId()
  programId: string

  @IsNotEmpty()
  @IsString()
  name: string
}
