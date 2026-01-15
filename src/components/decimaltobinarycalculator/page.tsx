"use client"

import { decimalToBinary } from '@/lib/dtob';
import React, { useState } from 'react'
import { toast } from 'sonner';

const DecimalToBinary = () => {

    const [input, setInput] = useState("");
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        try {
            if (!input.trim()) {
                setResult(null);
                toast.error("Please enter an Integer number");
                return;
            }
            const n = (input);
            const value = decimalToBinary(n);
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
        <main className="flex items-center justify-center mt-30 text-white overflow-hidden">
            <div className="w-full max-w-md p-6 rounded-xl border border-gray-700">
                <h1 className="text-2xl font-bold mb-1 text-center">
                    Decimal To Binary Calculator
                </h1>

                <p className="text-[18px] text-gray-400 mb-4 text-center">
                    Convert a Decimal Integer to Binary
                </p>

                <input
                    className="w-full p-2 mb-3 rounded bg-gray-900 border border-gray-700"
                    placeholder='Enter a decimal number'
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
                        <p className="text-gray-400">Result :</p>
                        <p className="break-all font-mono">
                            {result}
                        </p>
                    </div>
                )}
            </div>
        </main>
    )
}

export default DecimalToBinary;