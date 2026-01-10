"use client";

import { log2Approx } from '@/lib/log2';
import React, { useState } from 'react'
import { toast } from 'sonner';

const Calculator = () => {

    const [input, setInput] = useState("");
    const [result, setResult] = useState<number | null>(null);

    const calculate = () => {
        try {
            const n = Number(input);
            const value = log2Approx(n);
            setResult(value);
        } catch (e) {
            setResult(null);
            if (e instanceof Error) {
                toast.error(e.message);
            } else {
                toast.error("Something went wrong");
            }
        }
    }


    return (
        <main className="min-h-screen flex items-center justify-center bg-black text-white">
            <div className="w-full max-w-md p-6 rounded-xl border border-gray-700">
                <h1 className="text-3xl font-bold mb-1 text-center">
                    Log Base 2 Calculator
                </h1>

                <p className="text-[18px] text-gray-400 mb-4 text-center">
                    log₂(n)  (Honest Approximation)
                </p>

                <input
                    className="w-full p-2 mb-3 rounded bg-gray-900 border border-gray-700"
                    placeholder='Enter a positive number'
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <button
                    onClick={calculate}
                    className="w-full bg-white text-black font-semibold py-2 rounded"
                >
                    Calculate
                </button>

                {result !== null && (
                    <div className="mt-4">
                        <p className="text-gray-400">Result (approx):</p>
                        <p className="break-all font-mono">
                            {result.toPrecision(17)}
                        </p>
                    </div>
                )}
            </div>
        </main>
    )
}

export default Calculator;