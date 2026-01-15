export function multiplyHexDigitByHexString(digit: string, hexString: string): string {

    //edge case for more than 1 hex character inside the digit

    if (digit.length !== 1) {
        throw new Error("The digit parameter must be a single hexadecimal character");
    }

    let d: number;
    const ch = digit.charCodeAt(0);
    if (ch >= '0'.charCodeAt(0) && ch <= '9'.charCodeAt(0)) {
        d = ch - '0'.charCodeAt(0);
    } else if (ch >= 'A'.charCodeAt(0) && ch <= 'F'.charCodeAt(0)) {
        d = ch - 'A'.charCodeAt(0) + 10;
    } else {
        throw new Error("Invalid hexadecimal digit");
    }

    let j = hexString.length - 1;
    let carry = 0;
    let result: string[] = [];

    while (j >= 0 || carry > 0) {

        let d2: number = 0;

        if (j >= 0) {
            let ch = hexString.charCodeAt(j);
            if (ch >= '0'.charCodeAt(0) && ch <= '9'.charCodeAt(0)) {
                d2 = ch - '0'.charCodeAt(0);
            } else if (ch >= 'A'.charCodeAt(0) && ch <= 'F'.charCodeAt(0)) {
                d2 = ch - 'A'.charCodeAt(0) + 10;
            } else {
                throw new Error("Invalid hexadecimal string");
            }
        }

        let product = d * d2 + carry;
        let digitResult = product % 16;
        carry = Math.floor(product / 16);

        if (digitResult < 10) {
            result.push(String.fromCharCode(digitResult + '0'.charCodeAt(0)));
        } else {
            result.push(String.fromCharCode('A'.charCodeAt(0) + (digitResult - 10)))
        }

        j--;
    }
    return result.reverse().join('');
}