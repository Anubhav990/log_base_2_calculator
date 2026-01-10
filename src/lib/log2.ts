export function log2Approx(n: number): number {
    if (!Number.isFinite(n) || n <= 0) {
        throw new Error("Input must be a positive finite number.");
    }

    return Math.log(n) / Math.log(2);
}