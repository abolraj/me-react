import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

const AbolScrollbar = () => {
    const { scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    const scrollPercentage = useTransform(scrollYProgress, v => parseInt(v*100));

    return (
        <motion.div
            className="fixed left-0 top-1/2 -translate-y-1/2  z-50 pointer-events-none"
            style={{
                display: useTransform(scrollPercentage, v => v >= 10 && v <= 95 ? 'block' : 'none'),
            }}
        >
            {/* Scroll track */}
            <div className="relative h-[100dvh] w-[6px] lg:w-1">
                {/* Gradient track */}
                <div className="absolute inset-0 overflow-hidden">
                    <motion.div className='w-full h-full origin-top bg-gradient-to-b from-primary to-secondary/20'
                        style={{
                            scaleY: scrollYProgress,
                        }}
                    >
                    </motion.div>
                </div>


                {/* Current percentage indicator */}
                <div
                    className="absolute top-16 lg:top-20 -left-1 text-center text-lg font-bold text-primary whitespace-nowrap pointer-events-auto"
                >
                    <motion.span style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'upright',
                        letterSpacing:-5,
                        fontFamily: 'sans-serif',
                    }}>
                        {useTransform(scrollPercentage, v => v)}
                    </motion.span>
                </div>
            </div>
        </motion.div >
    );
};

export default AbolScrollbar;