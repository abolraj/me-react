
import React, { useState, useCallback, useMemo, useImperativeHandle, forwardRef, useRef, useEffect } from 'react';

// Letter matrices (3x5) - optimized as bit patterns
const LETTERS = {
    A: [[0, 1, 0], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]],
    B: [[1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 1, 0]],
    C: [[0, 1, 1], [1, 0, 0], [1, 0, 0], [1, 0, 0], [0, 1, 1]],
    D: [[1, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 1, 0]],
    E: [[1, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 0], [1, 1, 1]],
    F: [[1, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 0], [1, 0, 0]],
    G: [[0, 1, 1], [1, 0, 0], [1, 0, 1], [1, 0, 1], [0, 1, 1]],
    H: [[1, 0, 1], [1, 0, 1], [1, 1, 1], [1, 0, 1], [1, 0, 1]],
    I: [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]],
    J: [[1, 1, 1], [0, 0, 1], [0, 0, 1], [1, 0, 1], [0, 1, 0]],
    K: [[1, 0, 1], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]],
    L: [[1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 0, 0], [1, 1, 1]],
    M:[[1, 1, 0, 1 ,1],
        [1, 1, 1, 1, 1], 
        [1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1]],
    N: [[1, 0, 0, 1],
        [1, 1, 0, 1], 
        [1, 0, 1, 1], 
        [1, 0, 0, 1], 
        [1, 0, 0, 1]],
    O: [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0]],
    P: [[1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 0, 0], [1, 0, 0]],
    Q: [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 1, 0], [0, 1, 1]],
    R: [[1, 1, 0], [1, 0, 1], [1, 1, 0], [1, 0, 1], [1, 0, 1]],
    S: [[0, 1, 1], [1, 0, 0], [0, 1, 0], [0, 0, 1], [1, 1, 0]],
    T: [[1, 1, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 1, 0]],
    U: [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0]],
    V: [[1, 0, 1], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0]],
    W: [[1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1], 
        [1, 0, 1, 0, 1], 
        [1, 1, 1, 1, 1], 
        [1, 1, 0, 1 ,1]],
    X: [[1, 0, 1], [1, 0, 1], [0, 1, 0], [1, 0, 1], [1, 0, 1]],
    Y: [[1, 0, 1], [1, 0, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0]],
    Z: [[1, 1, 1], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]],
    ' ': [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0]],
    '!': [[0, 1, 0], [0, 1, 0], [0, 1, 0], [0, 0, 0], [0, 1, 0]],
    '?': [[0, 1, 0], [1, 0, 1], [0, 0, 1], [0, 1, 0], [0, 1, 0]],
    '.': [[0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 0, 0], [0, 1, 0]],
    '0': [[0, 1, 0], [1, 0, 1], [1, 0, 1], [1, 0, 1], [0, 1, 0]],
    '1': [[0, 1, 0], [1, 1, 0], [0, 1, 0], [0, 1, 0], [1, 1, 1]],
    '2': [[1, 1, 0], [0, 0, 1], [0, 1, 0], [1, 0, 0], [1, 1, 1]],
    '3': [[1, 1, 0], [0, 0, 1], [0, 1, 0], [0, 0, 1], [1, 1, 0]],
    '4': [[1, 0, 1], [1, 0, 1], [1, 1, 1], [0, 0, 1], [0, 0, 1]],
    '5': [[1, 1, 1], [1, 0, 0], [1, 1, 0], [0, 0, 1], [1, 1, 0]],
    '6': [[0, 1, 1], [1, 0, 0], [1, 1, 0], [1, 0, 1], [0, 1, 0]],
    '7': [[1, 1, 1], [0, 0, 1], [0, 1, 0], [0, 1, 0], [0, 1, 0]],
    '8': [[0, 1, 0], [1, 0, 1], [0, 1, 0], [1, 0, 1], [0, 1, 0]],
    '9': [[0, 1, 0], [1, 0, 1], [0, 1, 1], [0, 0, 1], [1, 1, 0]]
};

const PixelCanvas = forwardRef(({
    widthPixels = 10,
    heightPixels = 10,
    pixelElement = 'div',
    modeOnClassName = 'bg-primary',
    modeOffClassName = 'bg-base-300',
    onClickPixels,
    onHoverPixels,
    pixelSize = 'auto',
    pixelsGap = '2px',
    pixelClassName = '',
    lettersMWidth = 3,
    lettersMHeight = 5,
    className = '',
    text = null,
    ...props
}, ref) => {
    const [coreMatrix, setCoreMatrix] = useState(() =>
        Array(heightPixels).fill(0).map(() => Array(widthPixels).fill(0))
    );
    // const [currentX.current, setCurrentX] = useState(0);
    // const [currentY.current, setCurrentY] = useState(0);
    const matrixClickEvents = useRef([]);
    const currentX = useRef(0);
    const currentY = useRef(0);

    // Calculate pixel size if auto
    const calculatedPixelSize = useMemo(() => {
        if (pixelSize === 'auto') {
            return `calc-size(100%, size / ${widthPixels})`;
        }
        return pixelSize;
    }, [pixelSize, widthPixels]);

    // Display matrix at specific position
    const displayMatrix = useCallback((x, y, matrix, onClick = null) => {

        setCoreMatrix(prev => {
            const newMatrix = Object.create(prev);
            const mH = matrix.length;
            const mW = matrix[0]?.length || 0;

            if (onClick) {
                matrixClickEvents.current.push([x, y, x + mW - 1, y + mH - 1, onClick])
            }

            for (let i = 0; i < mH; i++) {
                for (let j = 0; j < mW; j++) {
                    const targetY = y + i;
                    const targetX = x + j;
                    if (targetY >= 0 && targetY < heightPixels && targetX >= 0 && targetX < widthPixels) {
                        newMatrix[targetY][targetX] = matrix[i][j];
                    }
                }
            }
            return newMatrix;
        });
    }, [heightPixels, widthPixels]);

    // Push matrix at current position and advance
    const goToNextLine = useCallback(() => {
        currentX.current = 0;
        currentY.current += lettersMHeight + 1;
    }, [currentY.current, currentX.current]);

    // Push matrix at current position and advance
    const pushMatrix = useCallback((matrix, onClick = null) => {
        const mW = matrix[0]?.length || 0;
        displayMatrix(currentX.current, currentY.current, matrix, onClick);
        currentX.current += mW + 1;

    }, [currentX.current, currentY.current, displayMatrix]);

    // Push word using letter matrices
    const pushWord = useCallback((word, onClick = null) => {
        word.toUpperCase().split('').forEach((char, idx) => {
            const letterMatrix = LETTERS[char] || LETTERS[' '];
            pushMatrix(letterMatrix, onClick ? (x, y, mX, mY) => onClick(x, y, mX, mY, idx) : null);
        });
    }, [pushMatrix]);

    // Pull matrix (move back)
    const pullMatrix = useCallback(() => {
        // setCurrentX(prev => Math.max(0, prev - (lettersMWidth + 1)));
        currentX.current = Math.max(0, prev - (lettersMWidth + 1));
    }, [lettersMWidth]);

    // Pull word
    const pullWord = useCallback((word) => {
        const charCount = word.length;
        // setCurrentX(prev => Math.max(0, prev - (charCount * (lettersMWidth + 1))));
        currentX.current = Math.max(0, prev - (charCount * (lettersMWidth + 1)));

    }, [lettersMWidth]);

    // Reset cursor position
    const resetCursor = useCallback((x = 0, y = 0) => {
        // setCurrentX(x);
        currentX.current = x
        // setCurrentY(y);
        currentY.current = y
    }, []);

    // Clear entire matrix
    const clearMatrix = useCallback(() => {
        setCoreMatrix(Array(heightPixels).fill(0).map(() => Array(widthPixels).fill(0)));
        // setCurrentX(0);
        currentX.current = 0;
        // setCurrentY(0);
        currentY.current = 0;

    }, [heightPixels, widthPixels]);

    // Handle pixel click
    const handlePixelClick = useCallback((y, x) => {
        if (onClickPixels) {
            onClickPixels(x, y);
        }
    }, [onClickPixels]);

    // Handle pixel hover
    const handlePixelHover = useCallback((y, x, target) => {
        if (onHoverPixels) {
            onHoverPixels(x, y, target);
        }
    }, [onHoverPixels]);

    const handleWrapperClick = (e) => {
        const target = e.target
        if (target.classList.contains('pixel')) {
            const x = +target.getAttribute('data-x')
            const y = +target.getAttribute('data-y')
            handleMatrixClickEvents(x, y)
            handlePixelClick(x, y, target)
        }
    }

    const handleWrapperHover = (e) => {
        const target = e.target
        if (target.classList.contains('pixel')) {
            const x = +target.getAttribute('data-x')
            const y = +target.getAttribute('data-y')
            handlePixelHover(x, y, target)
        }
    }

    const handleMatrixClickEvents = (x, y) => {
        for (const event of matrixClickEvents.current) {
            const [ex, ey, ex2, ey2, e] = event
            if (ex <= x && x <= ex2 && ey <= y && y <= ey2) {
                e(x, y, ex, ey, ex2, ey2);
            }
        }
    }

    // Clock drawing methods
    const drawClock = useCallback((x, y, auto = true, autoDelay = 1, size = 12) => {
        // Ensure size is odd for better symmetry
        if (size % 2 === 0) size++;
        if (size < 9) size = 9; // Minimum size

        // Clear the clock area by drawing empty matrix
        const emptyMatrix = Array(size).fill(0).map(() => Array(size).fill(0));
        displayMatrix(x, y, emptyMatrix);

        // Draw clock face
        const faceMatrix = createClockFace(size);
        displayMatrix(x, y, faceMatrix);

        // Get current time and draw hands
        const now = new Date();
        const hours = now.getHours() % 12;
        const minutes = now.getMinutes();
        const seconds = now.getSeconds();

        drawClockHands(x, y, hours, minutes, seconds, size);

        // Store clock position for auto updates
        if (auto) {
            return {
                x,
                y,
                size,
                interval: setInterval(() => {
                    // Clear previous hands by redrawing just the face
                    displayMatrix(x, y, faceMatrix);

                    // Update time
                    const newNow = new Date();
                    const newHours = newNow.getHours() % 12;
                    const newMinutes = newNow.getMinutes();
                    const newSeconds = newNow.getSeconds();

                    drawClockHands(x, y, newHours, newMinutes, newSeconds, size);
                }, autoDelay * 1000)
            };
        }

        return null;
    }, [displayMatrix]);

    const createClockFace = useCallback((size = 12) => {
        const matrix = Array(size).fill(0).map(() => Array(size).fill(0));
        const centerX = Math.floor(size / 2);
        const centerY = Math.floor(size / 2);
        const radius = Math.floor(size / 2) - 1;

        // Draw circle
        for (let angle = 0; angle < 360; angle += 1) {
            const rad = (angle * Math.PI) / 180;
            const px = Math.round(centerX + radius * Math.cos(rad));
            const py = Math.round(centerY + radius * Math.sin(rad));

            if (px >= 0 && px < size && py >= 0 && py < size) {
                matrix[py][px] = 1;
            }
        }

        // Add hour markers (12, 3, 6, 9 positions)
        // Top
        matrix[1][centerX] = 1;
        // Right
        matrix[centerY][size - 2] = 1;
        // Bottom
        matrix[size - 2][centerX] = 1;
        // Left
        matrix[centerY][1] = 1;

        return matrix;
    }, []);

    const drawClockHands = useCallback((x, y, hours, minutes, seconds, size = 12) => {
        const centerX = Math.floor(size / 2);
        const centerY = Math.floor(size / 2);
        const centerRadius = 1; // Small center dot

        // Draw center dot
        const centerMatrix = [[1]];
        displayMatrix(x + centerX, y + centerY, centerMatrix);

        // Calculate angles
        const hourAngle = ((hours + minutes / 60) * 30 - 90) * (Math.PI / 180);
        const minuteAngle = (minutes * 6 - 90) * (Math.PI / 180);
        const secondAngle = (seconds * 6 - 90) * (Math.PI / 180);

        // Draw hour hand (shortest, about 30% of radius)
        const hourLength = Math.floor(size * 0.3);
        drawHand(x, y, centerX, centerY, hourAngle, hourLength, size);

        // Draw minute hand (medium, about 45% of radius)
        const minuteLength = Math.floor(size * 0.45);
        drawHand(x, y, centerX, centerY, minuteAngle, minuteLength, size);

        // Draw second hand (longest, about 40% of radius)
        const secondLength = Math.floor(size * 0.4);
        drawHand(x, y, centerX, centerY, secondAngle, secondLength, size);
    }, [displayMatrix]);

    const drawHand = useCallback((baseX, baseY, centerX, centerY, angle, length, size) => {
        // Calculate hand endpoint
        const endX = Math.round(centerX + length * Math.cos(angle));
        const endY = Math.round(centerY + length * Math.sin(angle));

        // Use Bresenham's line algorithm to draw the hand
        let x0 = centerX;
        let y0 = centerY;
        let x1 = endX;
        let y1 = endY;

        const dx = Math.abs(x1 - x0);
        const dy = Math.abs(y1 - y0);
        const sx = (x0 < x1) ? 1 : -1;
        const sy = (y0 < y1) ? 1 : -1;
        let err = dx - dy;

        while (true) {
            // Draw pixel at current position
            const handMatrix = [[1]];
            displayMatrix(baseX + x0, baseY + y0, handMatrix);

            if (x0 === x1 && y0 === y1) break;

            const e2 = 2 * err;
            if (e2 > -dy) {
                err -= dy;
                x0 += sx;
            }
            if (e2 < dx) {
                err += dx;
                y0 += sy;
            }
        }
    }, [displayMatrix]);

    // Function to stop auto-updating clock
    const stopClock = useCallback((clockData) => {
        if (clockData && clockData.interval) {
            clearInterval(clockData.interval);
        }
    }, []);

    useEffect(() => {
        if (text) {
            clearMatrix();
            if (Array.isArray(text)) {
                text.forEach(text => {
                    pushWord(text)
                    goToNextLine()
                })
            } else {
                pushWord(text);
            }
        }
    }, [text])

    // Expose methods to parent via ref
    useImperativeHandle(ref, () => ({
        displayMatrix,
        pushMatrix,
        pushWord,
        pullMatrix,
        pullWord,
        resetCursor,
        clearMatrix,
        drawClock,
        stopClock
    }));

    const PixelElement = pixelElement;

    return (
        <div
            className={`grid p-2 rounded-lg bg-base-200 ${className}`}
            style={{
                gridTemplateColumns: `repeat(${widthPixels}, ${pixelSize})`,
                gap: pixelsGap
                // gridTemplateRows: `repeat(${heightPixels}, ${calculatedPixelSize})`
            }}
            onClick={handleWrapperClick}
            onMouseMove={handleWrapperHover}
            {...props}
        >
            {coreMatrix.map((row, y) =>
                row.map((pixel, x) => (
                    <PixelElement
                        key={`${y}-${x}`}
                        className={`pixel rounded-sm transition-all duration-150 cursor-pointer hover:scale-110 ${pixel ? modeOnClassName : modeOffClassName
                            } ${pixelClassName}`}
                        style={{
                            // width: calculatedPixelSize,
                            // height: calculatedPixelSize,
                            aspectRatio: '1'
                        }}
                        data-x={x}
                        data-y={y}
                    />
                ))
            )}
        </div>
    );
});

export default PixelCanvas;