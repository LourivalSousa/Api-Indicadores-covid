import { VacinacaoModel } from "@/domain/models/indicadores"


export interface CarregarDadosVacinacao {
  carregarDados(): Promise<CarregarDadosVacinacao.Resultado>
}

export namespace CarregarDadosVacinacao {
  export type Resultado = VacinacaoModel
}