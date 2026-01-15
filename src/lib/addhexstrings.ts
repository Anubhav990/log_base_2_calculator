export function addHexStrings(str1: string, str2: string): string {
    let i = str1.length - 1;
    let j = str2.length - 1;
    let carry = 0;

    let result: string[] = [];

    while (i >= 0 || j >= 0 || carry > 0) {
        let d1 = 0;
        if (i >= 0) {
            let ch = str1.charCodeAt(i);
            if (ch >= '0'.charCodeAt(0) && ch <= '9'.charCodeAt(0)) {
                d1 = ch - '0'.charCodeAt(0);
            } else if (ch >= 'A'.charCodeAt(0) && ch <= 'F'.charCodeAt(0)) {
                d1 = ch - 'A'.charCodeAt(0) + 10;
            } else {
                throw new Error("Invalid hexadecimal string for string 1");
            }
        }

        let d2 = 0;
        if (j >= 0) {
            let ch = str2.charCodeAt(j);
            if (ch >= '0'.charCodeAt(0) && ch <= '9'.charCodeAt(0)) {
                d2 = ch - '0'.charCodeAt(0);
            } else if (ch >= 'A'.charCodeAt(0) && ch <= 'F'.charCodeAt(0)) {
                d2 = ch - 'A'.charCodeAt(0) + 10;
            } else {
                throw new Error("Invalid hexadecimal string for string 2");
            }
        }

        let sum = d1 + d2 + carry;
        let digit = sum % 16;
        carry = Math.floor(sum / 16);

        if (digit < 10) {
            result.push(String.fromCharCode(digit + '0'.charCodeAt(0)));
        } else {
            result.push(String.fromCharCode('A'.charCodeAt(0) + (digit - 10)));
        }

        i--;
        j--;
    }
    return result.reverse().join('');
}