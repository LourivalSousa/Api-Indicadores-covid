import { CasosModel } from "src/domain/models/indicadores";

export interface CarregarCasos{
  carregarCasos():Promise<CarregarCasos.Resultado>
}

export namespace CarregarCasos {
  export type Resultado = CasosModel
}