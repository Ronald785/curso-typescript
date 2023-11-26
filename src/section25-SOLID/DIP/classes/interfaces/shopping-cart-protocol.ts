import { CartItem } from "./cart-item";

export interface ShoppingCartProtocol {
    items: Readonly<CartItem[]>;
    removeItem(index: number): void;
    total(): number;
    totalWithDiscount(): number;
    isEmpty(): boolean;
    clear(): void;
}
