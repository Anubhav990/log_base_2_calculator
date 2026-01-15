"use client"

import { addbaseBStrings } from '@/lib/addbasebstrings';
import React, { useState } from 'react'
import { toast } from 'sonner';

const BaseBAddition = () => {

    const [num1, setNum1] = useState("");
    const [num2, setNum2] = useState("");
    const [base, setBase] = useState("");
    const [result, setResult] = useState<string | null>(null);

    const calculate = () => {
        try {
            if (!num1.trim() || !num2.trim() || !base.trim()) {
                setResult(null);
                toast.error("Please fill all fields");
                return;
            }
            const b = Number(base);
            if (Number.isNaN(b)) {
                toast.error("Base must be a number");
                return;
            }
            const value = addbaseBStrings(num1, num2, b);
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
                    Base-B Addition Calculator
                </h1>

                <p className="text-[18px] text-gray-400 mb-4 text-center">
                    Add two numbers in any base (2–10)
                </p>

                <input
                    className="w-full p-2 mb-3 rounded bg-gray-900 border border-gray-700"
                    placeholder='Enter a first number'
                    value={num1}
                    onChange={(e) => setNum1(e.target.value)}
                />

                <input
                    className="w-full p-2 mb-3 rounded bg-gray-900 border border-gray-700"
                    placeholder='Enter a second number'
                    value={num2}
                    onChange={(e) => setNum2(e.target.value)}
                />

                <input
                    className="w-full p-2 mb-3 rounded bg-gray-900 border border-gray-700"
                    placeholder='Enter the base (2–10)'
                    value={base}
                    onChange={(e) => setBase(e.target.value)}
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

export default BaseBAddition;