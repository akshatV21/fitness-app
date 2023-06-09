import { Module } from '@nestjs/common'
import { ExerciseService } from './exercise.service'
import { ExerciseController } from './exercise.controller'
import { MongooseModule } from '@nestjs/mongoose'
import { Exercise, ExerciseSchema } from 'src/models/exercise.model'

@Module({
  imports: [MongooseModule.forFeature([{ name: Exercise.name, schema: ExerciseSchema }])],
  controllers: [ExerciseController],
  providers: [ExerciseService],
})
export class ExerciseModule {}
