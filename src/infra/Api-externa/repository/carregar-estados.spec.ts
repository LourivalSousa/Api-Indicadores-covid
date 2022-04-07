import { IndicadoresRepository } from "./indicadores-repositoy"
import axios from "axios";
import { CarregarEstados } from "../../../domain/usecases/indicadores";
import { formatarDataDiaMesAno } from "../../utils";

jest.mock('axios')
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe('Carregar estados',()=> {
  const indicador = new IndicadoresRepository()
  let resultado: CarregarEstados.Resultado
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
      },
      Acre:{
        at: "-9.0238",
        long: "-70.812",
        confirmed: 123819,
        recovered: 0,
        deaths: 1994,
        updated: "2022-04-07 04:20:53"
      }
    }
    mockedAxios.get.mockResolvedValue({data: resultadoAxios})
    resultado = await indicador.carregarEstados()
  })

  afterEach( ()=>{
    jest.resetAllMocks()
  })

  it('Deve retornar uma array com as informaçoes dos estados',() => {
    expect(resultado[0]).toMatchObject({
      nome: 'Acre',
      confirmados: 123819,
      obitos: 1994,
      ultima_atualizacao: "07-04-2022 04:20:53"
    })
  })
  it('Deve chamar função get do axios uma vez',()=>{
    expect(axios.get).toHaveBeenCalledTimes(1)
  })
})