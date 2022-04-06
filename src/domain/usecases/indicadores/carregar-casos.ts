import { CasosModel } from "@/domain/models/indicadores";

export interface CarregarCasos{
  carregarCasos():Promise<CarregarCasos.Resultado>
}

export namespace CarregarCasos {
  export type Resultado = CasosModel
}