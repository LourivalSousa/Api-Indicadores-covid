import { HttpResponse } from "./http";

export interface Controller<T = any> {
    lidar: (requisicao: T) => Promise<HttpResponse>
}