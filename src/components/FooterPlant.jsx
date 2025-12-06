import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'motion/react';
import { distance } from '@popmotion/popcorn';

import plantLogo from '@assets/svg/plant.svg';
import { useTranslation } from 'react-i18next';

const FooterPlant = () => {
    const ref = useRef(null);
    const {t} = useTranslation();
    const isInView = useInView(ref, { once: false, margin: "-50px" });
    const [activeLogo, setActiveLogo] = useState(0);

    const x = useMotionValue(0);
    const y = 0;

    return (
        <div
            ref={ref}
            className='max-w-[40rem] mx-auto'
        >
            <motion.div
                style={{
                    position: "relative",
                }}
                variants={{
                    hidden: {
                        opacity: 0,
                        x: -1000,
                    },
                    visible: {
                        opacity: 1,
                        x: 0,
                        transition: {
                            when: "beforeChildren",
                            staggerChildren: .1
                        }
                    }
                }}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                className='flex w-full justify-center *:grow *:p-1 *:box-border'
            >

                <Child
                    x={x}
                    active={activeLogo}
                    setActive={setActiveLogo}
                    index={0}
                >
                    <img src={plantLogo} alt="Plant" className='size-10' />
                </Child>

                <Child
                    x={x}
                    active={activeLogo}
                    setActive={setActiveLogo}
                    index={1}
                >
                    <div className='chat chat-start w-[13rem]'>
                        <div className='chat-bubble p-2 px-4 text-black chat-bubble-success whitespace-nowrap'>
                            {t('footer.wanna_grow')}
                        </div>
                    </div>
                </Child>

            </motion.div>
        </div>
    );
};

const Child = ({ children, active, setActive, index, x, y }) => {
    const isDragging = index === active;

    // EXACT same distance calculation as reference
    const d = 1;

    // EXACT same spring config pattern as reference
    const springConfig = {
        stiffness: Math.max(700 - d * 120, 0),
        damping: 20 + d * 5
    };

    const dx = useSpring(x, springConfig);
    // const dy = useSpring(y, springConfig);

    return (
        <motion.div
            drag="x"
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
            dragElastic={1}
            onDragStart={() => setActive(index)}
            style={{
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "grab",
                // EXACT same pattern: active uses direct values, others use spring
                x: isDragging ? x : dx,
                // y: isDragging ? y : dy,
                zIndex: isDragging ? 10 : 1
            }}
            whileDrag={{
                cursor: "grabbing",
                scale: 1.1
            }}
            className=' flex items-center justify-center'
        >
            <div className='flex items-center justify-center pointer-events-none'>
                {children}
            </div>
        </motion.div>
    );
};

export default FooterPlant;