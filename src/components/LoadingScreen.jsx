import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const LoadingScreen = ({ onComplete }) => {
    const [step, setStep] = useState(0);
    const steps = [
        "INITIALIZING...",
        "BOOTING SYSTEM...",
        "LOADING EVENTS..."
    ];

    useEffect(() => {
        if (step < steps.length) {
            const timer = setTimeout(() => {
                setStep(s => s + 1);
            }, 900);
            return () => clearTimeout(timer);
        } else {
            const timer = setTimeout(() => {
                onComplete();
            }, 800);
            return () => clearTimeout(timer);
        }
    }, [step, onComplete]);

    return (
        <div className="h-screen w-full bg-black flex flex-col items-center justify-center relative overflow-hidden">
            <div className="scanlines" />

            <div className="w-64 h-1 bg-white/10 relative overflow-hidden mb-8">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 3.5, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-cyan-400 shadow-[0_0_15px_var(--accent-color)]"
                />
            </div>

            <div className="h-8 flex items-center justify-center">
                <AnimatePresence mode="wait">
                    <motion.p
                        key={step}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="text-cyan-400 gaming-font tracking-widest text-lg"
                    >
                        {steps[step] || "READY"}
                    </motion.p>
                </AnimatePresence>
            </div>

            {/* Decorative Matrix-like background effect */}
            <div className="absolute inset-0 pointer-events-none opacity-10">
                <div className="grid grid-cols-12 gap-4 w-full h-full p-8">
                    {[...Array(48)].map((_, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: [0, 1, 0] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                                delay: Math.random() * 2
                            }}
                            className="text-[10px] text-cyan-500 font-mono"
                        >
                            {Math.random() > 0.5 ? '1' : '0'}
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default LoadingScreen;
