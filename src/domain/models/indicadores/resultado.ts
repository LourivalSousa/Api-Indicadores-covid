import { EstadoModel } from "./estado";
import { CasosModel } from "./casos";
import { VacinacaoModel } from "./vacinacao";

export interface ResultadoModel {
  pais: CasosModel & VacinacaoModel
  estados: Array<EstadoModel>
}
