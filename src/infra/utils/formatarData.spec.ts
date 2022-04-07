import { formatarDataDiaMesAno } from "./formatar-data"

describe("Formatar Data",()=>{
  const data = "2022-04-06 12:01:42"
  test("Deve ser possivel formatar uma data",()=>{
    expect(formatarDataDiaMesAno(data)).toBe("06-04-2022 12:01:42")
  })
  test("Deve retornar uma string",()=>{
    expect(typeof formatarDataDiaMesAno(data)).toBe('string')
  })
})