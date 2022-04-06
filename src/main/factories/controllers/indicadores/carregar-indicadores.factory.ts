import { CarregarCasos, CarregarDadosVacinacao, CarregarEstados } from "@/domain/usecases/indicadores";
import { CarregarIndicadoresController } from "@/presentation/controllers";
import { Controller } from "@/presentation/protocols";
import { Inject, Injectable } from "@nestjs/common";
import { CARREGAR_CASOS_FACTORY, CARREGAR_DADOS_VACINACAO_FACTORY, CARREGAR_ESTADOS_FACTORY } from "../../providers";
import { LogControllerDecoratorFactory } from "../log-controller-decorator.factory";

@Injectable()
export class ConstruirCarregarIndicadoresController {
  constructor(
    @Inject(CARREGAR_CASOS_FACTORY)
    private readonly carregarCasos: CarregarCasos,
    @Inject(CARREGAR_DADOS_VACINACAO_FACTORY)
    private readonly carregarDadosVacinacao: CarregarDadosVacinacao,
    @Inject(CARREGAR_ESTADOS_FACTORY)
    private readonly carregarEstados: CarregarEstados,
  ) {}
  public fabricar(): Controller {
    const controller = new CarregarIndicadoresController(
      this.carregarCasos,
      this.carregarDadosVacinacao,
      this.carregarEstados
    )
    return new LogControllerDecoratorFactory(controller)
  }
}