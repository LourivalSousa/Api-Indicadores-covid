import {CarregarDadosVacinacaoRepository } from "@/data/protocols/api";
import { CarregarDadosVacinacao } from "@/domain/usecases/indicadores";

export class ApiCarregarDadosVacinacao implements CarregarDadosVacinacaoRepository {
  constructor(
    private readonly carregarDadosVacinacaoRepository: CarregarDadosVacinacaoRepository
  ) {}

  async carregarDados(): Promise<CarregarDadosVacinacao.Resultado> {
    return await this.carregarDadosVacinacaoRepository.carregarDados()
  }
}