import { CarregarCasos } from "@/domain/usecases/indicadores";

export interface CarregarCasosRepository{
  carregarCasos():Promise<CarregarCasosRepository.Resultado>
}

export namespace CarregarCasosRepository {
  export type Resultado = CarregarCasos.Resultado
}