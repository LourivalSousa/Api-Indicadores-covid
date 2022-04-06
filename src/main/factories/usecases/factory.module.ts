import { IndicadoresRepository } from "@/infra/Api-externa/repository";
import { Module } from "@nestjs/common";
import { carregarCasosFactory, carregarDadosVacinacaoFactory, carregarEstadosFactory } from "./indicadores.ts";


@Module({
  providers:[
    IndicadoresRepository,

    carregarCasosFactory,
    carregarDadosVacinacaoFactory,
    carregarEstadosFactory
  ],
  exports:[
    carregarCasosFactory,
    carregarDadosVacinacaoFactory,
    carregarEstadosFactory
  ]
})
export class FactoryModule{}