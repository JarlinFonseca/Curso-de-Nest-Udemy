export let name: string = "Fernando";
name = 'Jarlin';
console.log(name);

export const age: number = 23;
export const isValid: boolean = true;

export const sum = (a: number, b: number): number => {
  return a + b;
}

export const templatesString = `Esto es un string
multilinea
que puede tener
"" dobles
' simple
inyectar valores: Name: ${name}, Age: ${age}
numeros: ${sum(2000, 24)}
booleanos: ${isValid}
`;

console.log(templatesString);