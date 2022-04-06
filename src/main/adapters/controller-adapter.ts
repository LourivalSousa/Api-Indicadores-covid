import { Controller, HttpResponse } from '@/presentation/protocols';

export const controllerAdapter = async (
  controller: Controller,
  requisicao?: any,
): Promise<HttpResponse> => {
  return controller.lidar(requisicao);
};
