export class ValorCorrespondeErro extends Error {
    constructor(stack: string) {
        super(stack)
        this.name = 'ValorCorrespondeErro'
    }
}
