import { ApiCarregarDadosVacinacao } from "@/data/usecases/indicadores"
import { CarregarDadosVacinacao } from "@/domain/usecases/indicadores"
import { IndicadoresRepository } from "@/infra/Api-externa/repository"
import { Provider } from "@nestjs/common"
import { CARREGAR_DADOS_VACINACAO_FACTORY } from "../../providers"

export const carregarDadosVacinacaoFactory: Provider = {
  provide: CARREGAR_DADOS_VACINACAO_FACTORY,
  useFactory: (indicadoresRepository: IndicadoresRepository): CarregarDadosVacinacao => {
    return new ApiCarregarDadosVacinacao(indicadoresRepository)
  },
  inject: [IndicadoresRepository]
}