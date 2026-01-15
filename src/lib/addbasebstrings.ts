export function addbaseBStrings(str1: string, str2: string, base: number): string {

    //edge case
    if (base < 2 || base > 10) {
        throw new Error("Base must be in the range 2-10");
    }

    let result: string[] = [];
    let i = str1.length - 1;
    let j = str2.length - 1;
    let carry = 0;

    while(i >= 0 || j >=0 || carry > 0){
        let d1 = (i >= 0) ? str1.charCodeAt(i) - '0'.charCodeAt(0) : 0;
        let d2 = (j >= 0) ? str2.charCodeAt(j) - '0'.charCodeAt(0) : 0;

        if(d1 >= base || d2 >= base){
            throw new Error("Invalid digit for the specified base");
        }

        let sum = d1 + d2 + carry;
        let digit = sum % base;
        carry = Math.floor(sum / base);

        result.push(String.fromCharCode(digit + '0'.charCodeAt(0)));
        i--;
        j--;
    }

    return result.reverse().join("");

}