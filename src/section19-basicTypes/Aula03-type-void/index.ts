function semRetorno(...args: string[]): void {
    console.log(args.join(" "));
}

const pessoa = {
    nome: "Ronald",
    sobrenome: "Almeida",

    exibirNome(): void {
        console.log(this.nome + " " + this.sobrenome);
    },
};

semRetorno("Ronald", "Almeida");
pessoa.exibirNome();

export { pessoa };
