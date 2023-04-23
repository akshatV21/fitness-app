import { Module } from '@nestjs/common'
import { ProgramService } from './program.service'
import { ProgramController } from './program.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Program, ProgramSchema } from 'src/models/program.model'

@Module({
  imports: [MongooseModule.forFeature([{ name: Program.name, schema: ProgramSchema }])],
  controllers: [ProgramController],
  providers: [ProgramService],
})
export class ProgramModule {}
