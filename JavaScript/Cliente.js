class Cliente {
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo = valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }

}

// const andre = new Cliente("Andre", "webwelison@gmail.com", "230230023", "100")

// andre.exibirSaldo()

// console.log(andre)



class ClientePoupanca extends Cliente{
    constructor(nome, email,cpf,saldo, saldoPoupanca){
        super(nome, email, cpf, saldo)
        this.saldoPoupanca = saldoPoupanca

    }

    depositarPoupanca(valor){
        this.saldoPoupanca += valor
    }
}

const andre = new ClientePoupanca("Andre", "webwelison@gmail.com", "230230023", "100", "1000")

console.log(andre)

andre.depositar(50)
andre.exibirSaldo()

console.log(andre)