import { useRef, useState } from 'react';
import { motion, useInView, useMotionValue, useSpring } from 'framer-motion';
import { distance } from '@popmotion/popcorn';

import laravelLogo from '@assets/svg/techs/laravel.svg';
import reactLogo from '@assets/svg/techs/react.svg';
import livewireLogo from '@assets/svg/techs/livewire.svg';
import htmlLogo from '@assets/svg/techs/html.svg';
import cssLogo from '@assets/svg/techs/css.svg';
import jsLogo from '@assets/svg/techs/js.svg';
import mysqlLogo from '@assets/svg/techs/mysql.svg';
import pgsqlLogo from '@assets/svg/techs/pgsql.svg';
import phpLogo from '@assets/svg/techs/php.svg';
import redisLogo from '@assets/svg/techs/redis.svg';
import tailwindLogo from '@assets/svg/techs/tailwind.svg';
import viteLogo from '@assets/svg/techs/vite.svg';

const TechLogos = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: false, margin: "-50px" });
    const [activeLogo, setActiveLogo] = useState({ row: 0, col: 0 });

    // Create a grid of logos (2 rows, 4 columns)
    const logoGrid = [
        [
            { id: 1, name: 'Laravel', size: '50%', logo: laravelLogo },
            { id: 2, name: 'React', size: '50%', logo: reactLogo },
        ],
        [
            { id: 3, name: 'Livewire', size: '25%', logo: livewireLogo },
            { id: 4, name: 'PHP', size: '25%', logo: phpLogo },
            { id: 5, name: 'MySQL', size: '25%', logo: mysqlLogo },
            { id: 6, name: 'TailwindCSS', size: '25%', logo: tailwindLogo }
        ],
        [
            { id: 7, name: 'PGSQL', size: 30, logo: pgsqlLogo },
            { id: 8, name: 'HTML', size: 30, logo: htmlLogo },
            { id: 9, name: 'CSS', size: 30, logo: cssLogo },
            { id: 10, name: 'JavaScript', size: 30, logo: jsLogo },
            { id: 11, name: 'Redis', size: 30, logo: redisLogo },
            { id: 12, name: 'livewire', size: 30, logo: livewireLogo },
            { id: 13, name: 'Vite', size: 30, logo: viteLogo },
        ]
    ];

    const x = useMotionValue(0);
    const y = useMotionValue(0);

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
                className='flex flex-wrap w-full justify-center *:grow *:p-1 *:box-border'
            >
                {logoGrid.map((row, rowIndex) =>
                    row.map((logo, colIndex) => (
                        <LogoSquare
                            key={logo.id}
                            logo={logo}
                            x={x}
                            y={y}
                            active={activeLogo}
                            setActive={setActiveLogo}
                            rowIndex={rowIndex}
                            colIndex={colIndex}
                        />
                    ))
                )}
            </motion.div>
        </div>
    );
};

const LogoSquare = ({ logo, active, setActive, rowIndex, colIndex, x, y }) => {
    const isDragging = colIndex === active.col && rowIndex === active.row;

    // EXACT same distance calculation as reference
    const d = distance(
        { x: active.col, y: active.row },
        { x: colIndex, y: rowIndex }
    );

    // EXACT same spring config pattern as reference
    const springConfig = {
        stiffness: Math.max(700 - d * 120, 0),
        damping: 20 + d * 5
    };

    const dx = useSpring(x, springConfig);
    const dy = useSpring(y, springConfig);

    return (
        <motion.div
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragTransition={{ bounceStiffness: 500, bounceDamping: 20 }}
            dragElastic={1}
            onDragStart={() => setActive({ row: rowIndex, col: colIndex })}
            style={{
                width: logo.size,
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                cursor: "grab",
                // EXACT same pattern: active uses direct values, others use spring
                x: isDragging ? x : dx,
                y: isDragging ? y : dy,
                zIndex: isDragging ? 10 : 1
            }}
            whileDrag={{
                cursor: "grabbing",
                scale: 1.1
            }}
            className='aspect-square flex items-center justify-center'
        >
            <div className='size-full aspect-square flex items-center justify-center pointer-events-none'>
                <img src={logo.logo} alt={logo.name} />
            </div>
        </motion.div>
    );
};

export default TechLogos;