class DadosNaoFornecidos extends Error {
    constructor () {
        super('Não foram encontrados dados para atualizar')
        this.name = 'dadosNaoFornecidos'
        this.idErro = 2
    }
}

module.exports = DadosNaoFornecidos