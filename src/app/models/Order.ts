import { Cart } from "./Cart";

export type Order = {
    customer: string;
    address: string;
    total: number;
    orderCart: Cart[];
}