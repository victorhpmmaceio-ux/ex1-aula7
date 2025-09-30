class jogador{
    constructor(id, nome, pontos, status) {
        this.id = id;
        this.nome = nome;
        this.pontos = pontos;
        this.status = status;
    }

    getData(){
        console.log(`
            -----Dados do jogador-----
            ID: ${this.id}
            Nome: ${this.nome}
            Pontos: ${this.pontos}
            Status: ${this.status ? Atovo : Inativo}`)
    }
}