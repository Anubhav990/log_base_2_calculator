export function hextoDecimal(hexStr: string) : number{

    let result = 0;

    if(hexStr.length > 8){
        throw new Error("Hexadecimal bits more than 32 bits");
    }

    for(let i = 0;i<hexStr.length;i++){
        const ch = hexStr[i];
        let value: number;
        if(ch >= '0' && ch <= '9'){
            value = ch.charCodeAt(0) - '0'.charCodeAt(0);
        }else if(ch >= 'A' && ch <= 'F'){
            value = ch.charCodeAt(0) - 'A'.charCodeAt(0) + 10;
        }else if(ch >= 'a' && ch <= 'f'){
            value = ch.charCodeAt(0) - 'a'.charCodeAt(0) + 10;
        }else{
            throw new Error("Invalid hexadecimal string");
        }

        result = result * 16 + value;

    }

    return result;

}