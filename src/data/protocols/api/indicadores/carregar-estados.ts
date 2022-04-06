import { CarregarEstados } from "@/domain/usecases/indicadores";

export interface CarregarEstadosRepository {
  carregarEstados(): Promise<CarregarEstadosRepository.Resultado>
}

export namespace CarregarEstadosRepository {
  export type Resultado = CarregarEstados.Resultado
}