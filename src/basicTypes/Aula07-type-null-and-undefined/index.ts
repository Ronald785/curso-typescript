let x;
if (typeof x === "undefined") {
    x = 20;
}
console.log(x * 2);

export function createPerson(
    firstName: string,
    lastName?: string,
): {
    firstName: string;
    lastName?: string;
} {
    return {
        firstName,
        lastName,
    };
}

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function squareOf(x: any): number | null {
    if (typeof x === "number") return x * x;
    return null;
}

const squareOfTwoString = squareOf("2");

if (squareOfTwoString === null) {
    console.log("Conta inválida");
} else {
    console.log(squareOfTwoString * 100);
}
