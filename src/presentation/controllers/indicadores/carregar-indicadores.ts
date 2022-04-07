import { ResultadoModel } from "@/domain/models/indicadores";
import { CarregarCasos, CarregarDadosVacinacao, CarregarEstados } from "@/domain/usecases/indicadores";
import { serverError, ok } from '../../helpers/http-helper';
import { Controller, HttpResponse } from "@/presentation/protocols";

export class CarregarIndicadoresController implements Controller {
  constructor(
    private readonly carregarCasos: CarregarCasos,
    private readonly carregarDadosVacinacao: CarregarDadosVacinacao,
    private readonly carregarEstados: CarregarEstados
  ) {}

  async lidar(): Promise<HttpResponse> {
    try{
      const casosBrasil = await this.carregarCasos.carregarCasos()
      const dadosVacinacao = await this.carregarDadosVacinacao.carregarDados()
      const estados = await this.carregarEstados.carregarEstados()
      const resultado: ResultadoModel = {
        pais: {...casosBrasil,...dadosVacinacao},
        estados: estados
      }
      return ok(resultado)
    }catch(erro){
      return serverError(erro)
    }
  }
}