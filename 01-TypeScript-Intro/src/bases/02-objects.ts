export const pokemonIds: number[] = [1,20,30,46,66];

pokemonIds.push(100);
pokemonIds.push(+'200');
pokemonIds.push(Number('200'));

console.log(pokemonIds);

export const bulbasaur: Pokemon = {
    id: 1,
    name: 'Bulbasaur',
    // age: 23,
    type: 'Grass',
    baseExperience: 64
}

interface Pokemon {
    id: number;
    name: string;
    age?: number | undefined;
    type: string;
    baseExperience: number;
}

console.log(bulbasaur);

export const charmander: Pokemon = {
    id: 2,
    name: 'Charmander',
    age: 23,
    type: 'Fire',
    baseExperience: 62
}
console.log(charmander);