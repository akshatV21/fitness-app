import { Module } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'
import configuration from './config/configuration'
import { DatabaseModule } from './database/database.module'
import { ProgramModule } from './program/program.module';

@Module({
  imports: [ConfigModule.forRoot({ isGlobal: true, load: [configuration] }), DatabaseModule, ProgramModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
