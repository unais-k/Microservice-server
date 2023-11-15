export interface ProductInterface {
    name: string;
    description: string;
    images?: string[];
    banner: string;
    type: string;
    quantity: number;
    price: number;
    available: boolean;
}
