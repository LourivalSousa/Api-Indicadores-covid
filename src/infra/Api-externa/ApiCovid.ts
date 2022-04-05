import axios from 'axios'

export class ApiCovid {
  informacaoCovid: any

  public async getCasos() {
    this.informacaoCovid = await axios.get('https://covid-api.mmediagroup.fr/v1/cases?country=Brazil')
    
  }
}