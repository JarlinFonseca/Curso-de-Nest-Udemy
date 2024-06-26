/**
 * Forma larga de definir una clase en TypeScript
 */
export class Pokemon {
    private id: number;
    private name: string;

    constructor(id: number, name: string) {
        this.id = id;
        this.name = name;
    }

    // Getters
    getId(): number {
        return this.id;
    }

    getName(): string {
        return this.name;
    }

    // Setters
    setId(id: number): void {
        this.id = id;
    }
    
    setName(name: string): void {
        this.name = name;
    }
}

export const charmander = new Pokemon(1, 'Charmander');


/**
 * Forma corta de definir una clase en TypeScript
 */
export class PokemonShort {

    get imageUrl(): string {
        return `https://pokeapi.co/api/v2/pokemon/${ this.name.toLocaleLowerCase() }`;
    }
    constructor(
        public readonly id: number, 
        public name: string,
        // public imageUrl: string,
    ) {}

    public scream(): void {
        console.log(`${ this.name.toUpperCase() }!!!`);
        this.speak();
    }

    private speak(): void {
        console.log(`${ this.name }, ${ this.name }`);
    } 
}

// Nombre de pokemon legendario
export const mewtwo = 
new PokemonShort(150, 'Mewtwo');
console.log(mewtwo);
console.log(mewtwo.imageUrl)

mewtwo.scream();
// mewtwo.speak();