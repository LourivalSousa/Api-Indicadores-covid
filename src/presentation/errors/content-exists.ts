export class ConteudoExiste extends Error {
    constructor(stack: string) {
        super(stack)
        this.name = 'ConteudoJaExiste'
    }
}