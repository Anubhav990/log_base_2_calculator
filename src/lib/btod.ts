export function binaryToDecimal(binaryStr: string): number {
    
    let result = 0;

    if (binaryStr.length > 16){
        throw new Error("Binary bit exceeds 16 bits");
    }

    for(let i = 0;i<binaryStr.length;i++){
        const ch = binaryStr[i];
        if(ch !== '0' && ch !== '1'){
            throw new Error("Invalid binary string");
        }

        result = result * 2 + (ch === '1' ? 1 : 0);
    }

    return result;
}