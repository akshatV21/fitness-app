import { Injectable } from '@nestjs/common'
import { InjectModel } from '@nestjs/mongoose'
import { Model } from 'mongoose'
import { Exercise, ExerciseDocument } from 'src/models/exercise.model'
import { CreateExerciseDto } from './dtos/createExercise.dto'

@Injectable()
export class ExerciseService {
  constructor(@InjectModel(Exercise.name) private readonly ExerciseModel: Model<ExerciseDocument>) {}

  async create(createExerciseDto: CreateExerciseDto) {
    const exercise = new this.ExerciseModel(createExerciseDto)
    await exercise.save()

    return exercise
  }

  async delete(id: string) {
    await this.ExerciseModel.deleteOne({ _id: id })
  }
}
