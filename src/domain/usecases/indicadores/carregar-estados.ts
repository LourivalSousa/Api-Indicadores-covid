import { EstadoModel } from "src/domain/models/indicadores";

export interface CarregarEstados {
  carregarEstados(): Promise<CarregarEstados.Resultado>
}

export namespace CarregarEstados {
  export type Resultado = EstadoModel[]
}