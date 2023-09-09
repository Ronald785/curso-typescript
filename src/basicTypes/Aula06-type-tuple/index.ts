// Tuple
const dadosCliente1: readonly [number, string] = [1, "Ronald"];
const dadosCliente2: [number, string, string] = [1, "Ronald", "Almeida"];
const dadosCliente3: [number, string, string?] = [1, "Ronald"];
const dadosCliente4: [number, string, ...string[]] = [1, "Ronald", "Almeida"];

dadosCliente2[0] = 100;
dadosCliente2[1] = "Carlos";

console.log(dadosCliente1);
console.log(dadosCliente2);
console.log(dadosCliente3);
console.log(dadosCliente4);

// readonly array
const array1: readonly string[] = ["Ronald", "Almeida"];
const array2: ReadonlyArray<string> = ["Ronald", "Almeida"];

console.log(array1);
console.log(array2);

// Module mode
// export default 1;
