

export interface CarregarDadosVacinacao {
  carregarDados(): Promise<CarregarDadosVacinacao.Resultado>
}

export namespace CarregarDadosVacinacao {
  export type Resultado = []
}