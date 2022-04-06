import { Module } from '@nestjs/common';
import { IndicadoresModule } from './controllers/indicadores/indicadores.module';

@Module({
  imports: [IndicadoresModule],
})
export class AppModule {}
