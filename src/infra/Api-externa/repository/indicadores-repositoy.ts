import axios from 'axios'
import { CarregarCasosRepository, CarregarDadosVacinacaoRepository, CarregarEstadosRepository } from '@/data/protocols/api'
import { CasosModel, EstadoModel, VacinacaoModel } from '@/domain/models/indicadores'
import { CarregarEstados } from '@/domain/usecases/indicadores'
import { URLCASOS, URLVACINACAO } from '../providers'
import { formatarDataDiaMesAno }  from '../../utils/formatar-data'

export class IndicadoresRepository implements
  CarregarCasosRepository,
  CarregarDadosVacinacaoRepository,
  CarregarEstadosRepository {

  async carregarCasos(): Promise<CarregarCasosRepository.Resultado> {
    try{
      const {data: casos} = await axios.get(URLCASOS)
      let casosBrasil: CasosModel
      for(let caso in casos) {
        if(caso === 'All') {
          const {
            country,
            life_expectancy,
            confirmed,
            population,
            deaths
          } = casos[caso]

          casosBrasil = {
          nome: country,
          expectativa_vida: Number(life_expectancy),
          total_casos_confirmados: confirmed,
          numero_populacao: population,
          total_obitos: deaths
          }
        }
      }
      return casosBrasil
    }catch(erro){
      throw erro
    }
  }

  async carregarDados(): Promise<CarregarDadosVacinacaoRepository.Resultado> {
    try{
      const {data} = await axios.get(URLVACINACAO)
      const {All: dadosVacinacao} = data
      const {administered,people_vaccinated, people_partially_vaccinated } = dadosVacinacao
      const dadosVacinacaoFiltrados: VacinacaoModel = {
        total_doses_aplicadas: administered,
        pessoas_vacinadas: people_vaccinated,
        pessoas_parcialmente_vacinadas: people_partially_vaccinated,
      }
      return dadosVacinacaoFiltrados
    }catch(erro){
      throw erro
    }
  }

  async carregarEstados(): Promise<CarregarEstados.Resultado> {
    try{
      const {data: casos} = await axios.get(URLCASOS)
      const estados: Array<EstadoModel> = []

      for(let caso in casos) {
        if(caso !=='All') {
          const {confirmed, deaths, updated} = casos[caso]
          const dataFormatoDiaMesAno = formatarDataDiaMesAno(updated)
          const estado: EstadoModel = {
            nome: caso,
            confirmados: confirmed,
            obitos: deaths,
            ultima_atualizacao: dataFormatoDiaMesAno
          }
          estados.push(estado)
        }
      }
      return estados
    }catch(erro){
      throw erro
    }
  }
}

