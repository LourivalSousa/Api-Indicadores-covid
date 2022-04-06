export class ConteudoNaoExiste extends Error {
    constructor(stack: string) {
        super(stack)
        this.name = 'ConteudoNaoExiste'
    }
}