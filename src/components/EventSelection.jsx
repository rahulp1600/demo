import React from 'react';
import { motion } from 'framer-motion';
import { Search, Bug, Zap, Palette } from 'lucide-react';

const events = [
    {
        id: 'word-hunt',
        title: 'Word Hunt',
        description: 'Technical term exploration across all streams.',
        icon: Search,
        color: 'border-blue-500',
        glow: 'shadow-blue-500/20',
        textColor: 'text-blue-400'
    },
    {
        id: 'code-debugging',
        title: 'Code Debugging',
        description: 'Find the glitches in the matrix.',
        icon: Bug,
        color: 'border-red-500',
        glow: 'shadow-red-500/20',
        textColor: 'text-red-400'
    },
    {
        id: 'code-rush',
        title: 'Code Rush',
        description: 'Fastest coder wins the race.',
        icon: Zap,
        color: 'border-green-500',
        glow: 'shadow-green-500/20',
        textColor: 'text-green-400'
    },
    {
        id: 'tech-picto',
        title: 'Tech Picto',
        description: 'Visual riddles for technical minds. All streams.',
        icon: Palette,
        color: 'border-yellow-500',
        glow: 'shadow-yellow-500/20',
        textColor: 'text-yellow-400'
    }
];

const EventSelection = ({ onSelect }) => {
    return (
        <div className="min-h-screen w-full bg-[#050505] flex flex-col items-center justify-center p-6 relative overflow-hidden">
            <div className="scanlines" />

            <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-center mb-12 relative z-10"
            >
                <h1 className="text-3xl md:text-4xl font-black text-cyan-400 mb-2 gaming-font tracking-widest">
                    CHOOSE YOUR CHALLENGE
                </h1>
                <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl w-full relative z-10">
                {events.map((event, idx) => (
                    <motion.div
                        key={event.id}
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: idx * 0.1 }}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => onSelect(event.id)}
                        className={`cursor-pointer bg-white/5 backdrop-blur-md border ${event.color} ${event.glow} p-8 rounded-2xl flex flex-col items-center text-center transition-all duration-300 group hover:bg-white/10 shadow-lg`}
                    >
                        <div className={`p-4 rounded-full bg-white/5 mb-4 group-hover:scale-110 transition-transform duration-300`}>
                            <event.icon size={48} className={event.textColor} />
                        </div>
                        <h2 className="text-2xl font-bold text-white mb-2 gaming-font">{event.title}</h2>
                        <p className="text-gray-400 text-sm max-w-xs">{event.description}</p>

                        {/* Interactive corner markers */}
                        <div className={`absolute top-2 left-2 w-2 h-2 border-t border-l ${event.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                        <div className={`absolute top-2 right-2 w-2 h-2 border-t border-r ${event.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                        <div className={`absolute bottom-2 left-2 w-2 h-2 border-b border-l ${event.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                        <div className={`absolute bottom-2 right-2 w-2 h-2 border-b border-r ${event.color} opacity-0 group-hover:opacity-100 transition-opacity`} />
                    </motion.div>
                ))}
            </div>

            {/* Background elements */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-cyan-600/5 blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-600/5 blur-[120px] pointer-events-none" />
        </div>
    );
};

export default EventSelection;
