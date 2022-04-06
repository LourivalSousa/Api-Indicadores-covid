import { CarregarCasosRepository } from "@/data/protocols/api";
import { CasosModel } from "@/domain/models/indicadores";


export class ApiCarregarCasos implements CarregarCasosRepository {
  constructor(
    private readonly carregarCasosRepository: CarregarCasosRepository
  ) {}

  async carregarCasos(): Promise<CarregarCasosRepository.Resultado> {
    return await this.carregarCasosRepository.carregarCasos()
  }
}