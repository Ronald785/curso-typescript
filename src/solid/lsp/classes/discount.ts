export abstract class Discount {
    protected discount = 0;

    calculate(price: number): number {
        return price - price * this.discount;
    }

    //Quebra LSP, todas as subclasses são obrigadas a implementar essa classe
    // calculate(price: number): number {
    //     throw new Error("Not implemented Method");
    // }
}

export class FiftyPercentDiscount extends Discount {
    protected readonly discount = 0.5;
}

export class TenPercentDiscount extends Discount {
    protected readonly discount = 0.1;

    //Quebra Liskov Substitution Principle

    // calculate(price: number): number {
    //     return price;
    // }

    //Ao chamar a função eu seria obrigado a verificar se é um number
    // calculate(price: number): string {
    //     return `R$ ${price}`;
    // }
}

export class NoDiscount extends Discount {}
