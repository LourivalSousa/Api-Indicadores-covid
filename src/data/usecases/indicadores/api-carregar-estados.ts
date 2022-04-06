import { CarregarEstadosRepository } from "@/data/protocols/api";
import { CarregarEstados } from "@/domain/usecases/indicadores";


export class ApiCarregarEstados implements CarregarEstadosRepository {
  constructor(
    private readonly carregarEstadosRepository: CarregarEstadosRepository
  ) {}
  async carregarEstados(): Promise<CarregarEstados.Resultado> {
    return await this.carregarEstadosRepository.carregarEstados()
  }
}