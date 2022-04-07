import { CarregarDadosVacinacao } from "../../../domain/usecases/indicadores"
import { IndicadoresRepository } from "./indicadores-repositoy"
import axios from "axios";

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Carregar dados vacinação', () =>{
  const indicador = new IndicadoresRepository()
  let resultado: CarregarDadosVacinacao.Resultado
  let resultadoAxios: Object

  beforeEach(async () => {
    resultadoAxios = {
      All: {
        administered: 418988804,
        people_vaccinated: 161485597,
        people_partially_vaccinated: 181544315,
        country: 'Brazil',
        population: 209288278,
        sq_km_area: 8547403,
        life_expectancy: 62.9,
        elevation_in_meters: 320,
        continent: 'South America',
        abbreviation: 'BR',
        location: 'South America',
        iso: 76,
        capital_city: 'Brasília',
        updated: '2022/04/07 00:00:00+00'
      }
    }
    mockedAxios.get.mockResolvedValue({data: resultadoAxios})
    resultado = await indicador.carregarDados()
  })

  afterEach( ()=>{
    jest.resetAllMocks()
  })

  it('Deve retornar um json contendo as informaçoes(total de doses aplicadas, pessoas vacinadas, pessoas parcialmente vacinadas)',
    () => {
    expect(resultado).toMatchObject({
      total_doses_aplicadas: 418988804,
      pessoas_vacinadas: 161485597,
      pessoas_parcialmente_vacinadas: 181544315,
    })
  })

  it('Deve chamar função get do axios uma vez',()=>{
    expect(axios.get).toHaveBeenCalledTimes(1)
  })

})