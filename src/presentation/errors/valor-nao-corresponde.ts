export class ValorNaoCorrespondeErro extends Error {
    constructor(stack: string) {
        super(stack)
        this.name = 'ValorNaoCorrespondeErro'
    }
}
