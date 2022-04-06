import { CarregarDadosVacinacao } from "@/domain/usecases/indicadores"

export interface CarregarDadosVacinacaoRepository {
  carregarDados(): Promise<CarregarDadosVacinacaoRepository.Resultado>
}

export namespace CarregarDadosVacinacaoRepository {
  export type Resultado = CarregarDadosVacinacao.Resultado
}