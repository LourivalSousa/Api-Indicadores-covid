import { IndicadoresRepository } from "./indicadores-repositoy"
import axios from 'axios'
import { CarregarCasos } from "../../../domain/usecases/indicadores";

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Carregar Casos',()=>{
  const indicador = new IndicadoresRepository()
  let resultado: CarregarCasos.Resultado
  let resultadoAxios:Object

  beforeEach(async () => {
    resultadoAxios = {
      All: {
        confirmed: 30042272,
        recovered: 0,
        deaths: 660786,
        country: 'Brazil',
        population: 209288278,
        sq_km_area: 8547403,
        life_expectancy: 62.9,
        elevation_in_meters: 320,
        continent: 'South America',
        abbreviation: 'BR',
        location: 'South America',
        iso: 76,
        capital_city: 'Brasília'
      },
    }
    mockedAxios.get.mockResolvedValue({data: resultadoAxios})
    resultado = await indicador.carregarCasos()
  })

  afterEach( ()=>{
    jest.resetAllMocks()
  })

  it('Deve retornar um json contendo as informações (nome, expectativa de vida, total, populacao, obitos)',async ()=>{
    expect(resultado).toMatchObject({
      nome: 'Brazil',
      expectativa_vida: 62.9,
      total_casos_confirmados: 30042272,
      numero_populacao: 209288278,
      total_obitos: 660786
    })
  })

  it('Deve chamar função get do axios uma vez',()=>{
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})
