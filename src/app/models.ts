export interface Product {
    id?: number;
    name: string;
    price: number;
    photo?: string;
    description: string;
    supplierId: number;
}
export interface Supplier{
    id?: number;
    name: string;
    photo?: string;
    products?: Array<Product>;
}
export interface CartItem{
    product: Product,
    quantity: number,
}