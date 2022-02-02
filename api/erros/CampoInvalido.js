class CampoInvalido extends Error {
    constructor (campo) {
        const mensagem = `O campo '${campo}' esta inválido`
        super (mensagem)
        this.name = 'CampoInvalido'
        this.idErro = ''
    }
}

module.exports= CampoInvalido