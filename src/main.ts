import { NestFactory } from '@nestjs/core'
import { AppModule } from './app.module'
import { ConfigService } from '@nestjs/config'
import helmet from 'helmet'
import morgan from 'morgan'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  const configService = app.get<ConfigService>(ConfigService)

  const PORT = configService.get<string>('port')

  app.use(helmet())
  app.use(morgan('dev'))

  await app.listen(PORT, () => console.log(`Listening to requests on port ${PORT}`))
}
bootstrap()
