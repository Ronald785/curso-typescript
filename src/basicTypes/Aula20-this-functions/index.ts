//this em array functions usa o escopo global
//declare function se quer usar o this somente no escopo atual

export function date(this: Date, nome: string, age: number): void {
    console.log(this);
    console.log(nome, age);
}

date.call(new Date(), "Luiz", 30);
date.apply(new Date(), ["Luiz", 30]);
