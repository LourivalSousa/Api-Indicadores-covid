import { ApiCarregarCasos } from "@/data/usecases/indicadores"
import { CarregarCasos } from "@/domain/usecases/indicadores"
import { IndicadoresRepository } from "@/infra/Api-externa/repository"
import { Provider } from "@nestjs/common"
import { CARREGAR_CASOS_FACTORY } from "../../providers"

export const carregarCasosFactory: Provider = {
  provide: CARREGAR_CASOS_FACTORY,
  useFactory: (indicadoresRepository: IndicadoresRepository): CarregarCasos => {
    return new ApiCarregarCasos(indicadoresRepository)
  },
  inject: [IndicadoresRepository]
}