import PixelCanvas from "@/components/PixelCanvas";
import featuresService from "@/services/featureService"
import { CodeSquare } from "lucide-react";
import { useEffect, useRef, useState } from "react"

export default function ServicesPage({

}) {
    const [canvasData, setCanvasData] = useState({ pixelsGap: '2px' })
    const canvasRef = useRef(null);

    const handleShowCustom = () => {
        if (canvasRef.current) {
            // canvasRef.current.clearMatrix();
            // canvasRef.current.resetCursor(0, 0);

            // Draw a smiley face
            const smiley = [
                [0, 1, 1, 1, 1, 0],
                [1, 0, 0, 0, 0, 1],
                [1, 0, 1, 1, 0, 1],
                [1, 0, 0, 0, 0, 1],
                [1, 1, 0, 0, 1, 1],
                [0, 1, 1, 1, 1, 0]
            ];
            canvasRef.current.displayMatrix(1, 13, smiley);

            const sineWave3Cycles_6x40 = [
                [0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0,0,0,0,0,0,0,0],
                [0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,0,1,0,0,0,0,0,0,0,0],
                [0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0,0],
                [0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,1,0,0,0,0,0,0],
                [1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0],
                [0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,1,1,0,0,0,0,0,0,0,0,0,0,0,1,1,1,0,0]
            ];

            canvasRef.current.displayMatrix(10, 13, sineWave3Cycles_6x40);
        }
    };

    useEffect(() => {
        if (canvasRef.current) {
            canvasRef.current.drawClock(79, 0, true, 1, 21)
        }
    }, [canvasRef.current])

    useEffect(() => {
        handleResize()
        window.addEventListener('resize', e => {
            handleResize()
        })
    }, [])

    const handleResize = () => {
        if (window.innerWidth > 700) {
            setCanvasData(prev => ({ ...prev, pixelsGap: '2px' }))
        } else if (window.innerWidth > 600) {
            setCanvasData(prev => ({ ...prev, pixelsGap: '0px' }))
        } else {
            setCanvasData(prev => ({ ...prev, pixelsGap: 0 }))
        }
    }

    const render = () => {
        handleShowCustom()
    }

    useEffect(() => {
        render()
    }, [canvasData])

    return (
        <section className="mt-5">
            <PixelCanvas
                ref={canvasRef}
                widthPixels={100}
                heightPixels={20}
                pixelsGap={canvasData.pixelsGap}
                // pixelSize="10px"
                modeOnClassName="bg-primary"
                modeOffClassName="bg-base-300"
                // onClickPixels={(x, y) => console.log('Clicked:', x, y)}
                // onHoverPixels={(x,y, target)=> target.setAttribute('style',"background-color:white;")}
                className="w-full [transform:translateZ(0)]"
                // pixelClassName="rounded-none"
                text={[
                    "You can ask it!",
                    "We can do it! :)"
                ]}
            />
        </section>
    );
}