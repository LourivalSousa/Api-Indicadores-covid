import { controllerAdapter } from "@/main/adapters";
import { ConstruirCarregarIndicadoresController } from "@/main/factories/controllers/indicadores/carregar-indicadores.factory";
import { HttpResponse } from "@/presentation/protocols";
import { Controller, Get, Res } from "@nestjs/common";


@Controller('/indicadores')
export class IndicadoresController {
  constructor(
    private readonly construirCarregarIndicadoresController: ConstruirCarregarIndicadoresController
  ) {}
  @Get()
  async carregar(@Res() response:any): Promise<HttpResponse> {
    const resultado = await controllerAdapter(this.construirCarregarIndicadoresController.fabricar())
    return response.status(resultado.statusCode).json(resultado)
  }
}