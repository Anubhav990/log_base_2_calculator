export function decimalToHexadecimal(decimal: number): string {
    //edge case

    if (decimal === 0) {
        return "0";
    }

    if (decimal < 0) {
        throw new Error("Negative numbers are not supported");
    }

    let n = decimal;
    let hexadecimal: string[] = [];

    while (n > 0) {
        let remainder = n % 16;
        if (remainder < 10) {
            hexadecimal.push(remainder.toString());
        }
        else {
            hexadecimal.push(String.fromCharCode(remainder - 10 + 'A'.charCodeAt(0)));
        }
        n = Math.floor(n / 16);
    }
    return hexadecimal.reverse().join("");
}