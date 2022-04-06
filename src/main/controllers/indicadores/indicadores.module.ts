import { ConstruirCarregarIndicadoresController } from "@/main/factories/controllers/indicadores/carregar-indicadores.factory";
import { FactoryModule } from "@/main/factories/usecases/factory.module";
import { Module } from "@nestjs/common";
import { IndicadoresController } from "./indicadores.controller";


@Module({
  imports: [FactoryModule],
  controllers: [IndicadoresController],
  providers: [ConstruirCarregarIndicadoresController],
})
export class IndicadoresModule{}