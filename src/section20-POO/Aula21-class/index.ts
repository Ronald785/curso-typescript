export class Empresa {
    public readonly name: string;
    private readonly coloboradores: Colaborador[] = [];
    protected readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    adicionarColaboradores(coloborador: Colaborador): void {
        this.coloboradores.push(coloborador);
    }

    mostrarColaboradores(): void {
        for (const coloborador of this.coloboradores) {
            console.log(coloborador);
        }
    }
}

export class Colaborador {
    constructor(
        readonly nome: string,
        readonly sobrenome: string,
    ) {}
}

const udemy = new Empresa("Udemy", "27.603.612/0001-25");

const novoColobador = new Colaborador("Ronald", "Almeida");
const novoColobador2 = {
    //Objeto igual ao formato do construtor
    nome: "Barry",
    sobrenome: "Allen",
};

udemy.adicionarColaboradores(novoColobador);
udemy.adicionarColaboradores(novoColobador2);
udemy.adicionarColaboradores({
    nome: "Oliver",
    sobrenome: "Queen",
});

console.log(udemy);

udemy.mostrarColaboradores();
