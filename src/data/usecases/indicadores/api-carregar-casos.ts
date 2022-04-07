import { CarregarCasosRepository } from "@/data/protocols/api";


export class ApiCarregarCasos implements CarregarCasosRepository {
  constructor(
    private readonly carregarCasosRepository: CarregarCasosRepository
  ) {}

  async carregarCasos(): Promise<CarregarCasosRepository.Resultado> {
    return await this.carregarCasosRepository.carregarCasos()
  }
}