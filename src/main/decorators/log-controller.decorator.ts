import { Controller, HttpResponse } from "@/presentation/protocols";

export class LogControllerDecorator implements Controller {
    constructor(private readonly controller: Controller) { }

    async lidar(requsicao: any): Promise<HttpResponse> {
        //regra
        const resultado = await this.controller.lidar(requsicao)
        return resultado
    }
}