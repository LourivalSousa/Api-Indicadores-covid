import { EstadoModel } from "@/domain/models/indicadores";

export interface CarregarEstados {
  carregarEstados(): Promise<CarregarEstados.Resultado>
}

export namespace CarregarEstados {
  export type Resultado = Array<EstadoModel>
}