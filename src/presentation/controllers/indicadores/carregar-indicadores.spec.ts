import { ApiCarregarCasos, ApiCarregarDadosVacinacao, ApiCarregarEstados } from "../../../data/usecases/indicadores"
import { CarregarCasos, CarregarDadosVacinacao, CarregarEstados } from "../../../domain/usecases/indicadores"
import { IndicadoresRepository } from "../../../infra/Api-externa/repository"
import { CarregarIndicadoresController } from "./carregar-indicadores"

const indicadorRepository = new IndicadoresRepository()
const carregarCasos = new ApiCarregarCasos(indicadorRepository) 
const carregarEstados = new ApiCarregarEstados(indicadorRepository)
const carregarDadosVacinacao = new ApiCarregarDadosVacinacao(indicadorRepository) 
const carregarIndicadoresController = new CarregarIndicadoresController(
  carregarCasos,
  carregarDadosVacinacao,
  carregarEstados
)

function getCasosMock(): CarregarCasos.Resultado {
  return {
    nome:'Brazil',
    expectativa_vida: 70,
    total_casos_confirmados: 0,
    numero_populacao: 1000000,
    total_obitos: 0 
  }
}

function getDadosVacinacaoMock(): CarregarDadosVacinacao.Resultado {
  return {
    total_doses_aplicadas: 100000,
    pessoas_vacinadas: 1000000,
    pessoas_parcialmente_vacinadas: 1213231
  }
}

function getEstadosMock(): CarregarEstados.Resultado {
  return [
    {
      nome: 'Acre',
      confirmados: 0,
      obitos: 0,
      ultima_atualizacao: "08-04-2022 10:54:23"
    }
  ]
}

describe('Carregar Indicadores',() =>{

  test("Deve retornar um objeto do tipo Http Response com statusCode 200",async () => {
    const casos = await getCasosMock()
    const dadosVacinacao = await getDadosVacinacaoMock()
    const estados = await getEstadosMock()
    jest.spyOn(carregarCasos,'carregarCasos').mockReturnValueOnce(Promise.resolve(casos))
    jest.spyOn(carregarDadosVacinacao,'carregarDados').mockReturnValueOnce(Promise.resolve(dadosVacinacao))
    jest.spyOn(carregarEstados,'carregarEstados').mockReturnValueOnce(Promise.resolve(estados))
    const resultado = await carregarIndicadoresController.lidar()
    expect(resultado.statusCode).toBe(200)
  })

  test("Deve retornar o body contendo informaçoes do país e seus estados",async () => {
    const casos = await getCasosMock()
    const dadosVacinacao = await getDadosVacinacaoMock()
    const estados = await getEstadosMock()
    jest.spyOn(carregarCasos,'carregarCasos').mockReturnValueOnce(Promise.resolve(casos))
    jest.spyOn(carregarDadosVacinacao,'carregarDados').mockReturnValueOnce(Promise.resolve(dadosVacinacao))
    jest.spyOn(carregarEstados,'carregarEstados').mockReturnValueOnce(Promise.resolve(estados))
    const resultado = await carregarIndicadoresController.lidar()
    expect(resultado.body).toEqual({
      pais:{...casos,...dadosVacinacao},
      estados: estados 
    })
  })

  test('Deve retornar erro 500 se carregar casos retornar um erro',async ()=> {
    jest.spyOn(carregarCasos,'carregarCasos').mockImplementationOnce(()=>{
      throw new Error('Erro')
    })
    const resultado = await carregarIndicadoresController.lidar()
    expect(resultado.statusCode).toBe(500)
  })

  test('Deve retornar erro 500 se carregar dados vacinação retornar um erro',async ()=> {
    jest.spyOn(carregarDadosVacinacao,'carregarDados').mockImplementationOnce(()=>{
      throw new Error('Erro')
    })
    const resultado = await carregarIndicadoresController.lidar()
    expect(resultado.statusCode).toBe(500)
  })

  test('Deve retornar erro 500 se carregar estados retornar um erro',async ()=> {
    jest.spyOn(carregarEstados,'carregarEstados').mockImplementationOnce(()=>{
      throw new Error('Erro')
    })
    const resultado = await carregarIndicadoresController.lidar()
    expect(resultado.statusCode).toBe(500)
  })
})