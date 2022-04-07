import { ApiCarregarCasos, ApiCarregarDadosVacinacao, ApiCarregarEstados } from "../../../data/usecases/indicadores"
import { IndicadoresRepository } from "../../../infra/Api-externa/repository"
import { CarregarIndicadoresController } from "./carregar-indicadores"

describe('Carregar Indicadores',() =>{
  const indicadorRepository = new IndicadoresRepository()
  const carregarCasos = new ApiCarregarCasos(indicadorRepository) 
  const carregarEstados = new ApiCarregarEstados(indicadorRepository)
  const carregarDadosVacinacao = new ApiCarregarDadosVacinacao(indicadorRepository) 
  const carregarIndicadoresController = new CarregarIndicadoresController(
    carregarCasos,
    carregarDadosVacinacao,
    carregarEstados
  )
  
  it("Deve retornar um objeto do tipo Http Response com statusCode 200",async () => {
    const resultado = await carregarIndicadoresController.lidar()
    expect(resultado.statusCode).toBe(200)
  })
})