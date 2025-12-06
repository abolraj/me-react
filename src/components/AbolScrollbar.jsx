import { motion, useScroll, useSpring, useTransform } from 'motion/react';
import { useEffect, useState } from 'react';

const AbolScrollbar = () => {
    const { scrollYProgress } = useScroll();
    const [isVisible, setIsVisible] = useState(false);

    const scrollPercentage = (scrollYProgress);

    return (
        <motion.div
            className="fixed left-0 top-1/2 -translate-y-1/2  z-50 pointer-events-none"
            style={{
                display: useTransform(scrollPercentage, v => parseInt(v*100) >= 10 && parseInt(v*100) <= 95 ? 'block' : 'none'),
            }}
        >
            {/* Scroll track */}
            <div className="relative h-[50dvh] w-3">
                {/* Gradient track */}
                <div className="absolute inset-0 rounded-full overflow-hidden">
                    <motion.div className='w-full h-full origin-top bg-gradient-to-b from-primary to-secondary/20'
                        style={{
                            scaleY: scrollPercentage,
                        }}
                    >
                    </motion.div>
                </div>


                {/* Current percentage indicator */}
                <div
                    className="absolute top-0 -left-2 text-center text-lg font-bold text-primary-content whitespace-nowrap pointer-events-auto"
                >
                    <motion.span style={{
                        writingMode: 'vertical-rl',
                        textOrientation: 'upright',
                        letterSpacing:-5,
                        fontFamily: 'cursive'
                    }}>
                        {useTransform(() => parseInt(Math.round(scrollPercentage.get() * 100)))}
                    </motion.span>
                </div>
            </div>
        </motion.div >
    );
};

export default AbolScrollbar;