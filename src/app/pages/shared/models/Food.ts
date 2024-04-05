export class Food{
    id!: number;
    name!: string;
    oldPrice!: number;
    newPrice!: number;
    discount!: number;
    tags?: string[];
    favorite: boolean = false;
    stars: number = 0;
    imageUrl!: string;
    petType!: string[];
    petSymbol!: string[];
    foodSymbol!: string[];
    description!: string;
}