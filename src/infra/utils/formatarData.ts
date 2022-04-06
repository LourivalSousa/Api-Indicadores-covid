export function formatarDataDiaMesAno(data: string): string {
  const dataSeparada = data.split(' ')
  const dataAnoMesDia = dataSeparada[0].split('-')

  let dataFormatada: Array<string> | string = []
  const tamanhoData = dataAnoMesDia.length - 1
  
  for(let indice in dataAnoMesDia){
    dataFormatada.push(dataAnoMesDia[tamanhoData - Number(indice)])
  }

  dataFormatada = dataFormatada.join('-')
  dataFormatada = `${dataFormatada} ${dataSeparada[1]}`

  return dataFormatada 
}