export function decimalToBinary(decimal: number): string {

    //edge case

    if (decimal === 0) {
        return "0";
    }

    if (decimal < 0) {
        throw new Error("Negative numbers are not supported");
    }

    let n = decimal;
    let binary: string[] = [];

    while (n > 0) {
        let remainder = n % 2;
        binary.push(remainder.toString());
        n = Math.floor(n / 2);
    }

    return binary.reverse().join("");

}