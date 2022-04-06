import { ApiCarregarEstados } from "@/data/usecases/indicadores";
import { CarregarEstados } from "@/domain/usecases/indicadores";
import { IndicadoresRepository } from "@/infra/Api-externa/repository";
import { Provider } from "@nestjs/common";
import { CARREGAR_ESTADOS_FACTORY } from "../../providers";

export const carregarEstadosFactory: Provider = {
  provide: CARREGAR_ESTADOS_FACTORY,
  useFactory: (indicadoresRepository: IndicadoresRepository):CarregarEstados => {
    return new ApiCarregarEstados(indicadoresRepository)
  },
  inject: [IndicadoresRepository]
}