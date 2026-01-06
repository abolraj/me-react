import Package from "@/components/Package";
import PixelCanvas from "@/components/PixelCanvas";
import featuresService from "@/services/featureService"
import packagesService from "@/services/packageService";
import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef, useState } from "react"
import { useTranslation } from "react-i18next";

export default function ServicesPage({

}) {
    const { t } = useTranslation();
    const { packages, isLoading, isError } = packagesService.useMostPopularPackages(5);
    const [canvasData, setCanvasData] = useState({ pixelsGap: '2px' });
    const canvasRef = useRef(null);

    const handleShowCustom = () => {
        if (canvasRef.current) {

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

            // Draw a sinoide wave
            const sineWave3Cycles_6x40 = [
                [0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
                [0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0],
                [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0],
                [1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0],
                [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0]
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
                modeOnClassName="bg-primary"
                modeOffClassName="bg-base-300"
                className="w-full [transform:translateZ(0)]"
                text={[
                    "You can ask it!",
                    "We can do it! :)"
                ]}
            />

            <div className="mt-4 flex gap-2 flex-wrap first:w-full md:[&>div:nth-child(n+2)]:w-1/3 *:grow">
                {packages?.map((pack, i) => (
                    <Package
                        key={i}
                        title={pack.title}
                        description={pack.description}
                        logo={pack.logo}
                    />
                ))}
            </div>

            <div className="w-full flex flex-wrap gap-2 mt-4">
                <Link to="/services/packages" className="w-full lg:w-1/3 grow">
                    <button className="btn btn-secondary text-2xl p-2 w-full">
                        {t('common.all')} {t('services.packages')}
                        <ArrowRight className="size-4 rtl:-scale-x-100" />
                    </button>
                </Link>

                <Link to="/services/features" className="w-full lg:w-1/3 grow">
                    <button className="btn btn-secondary text-2xl p-2 w-full">
                        {t('common.all')} {t('services.features')}
                        <ArrowRight className="size-4 rtl:-scale-x-100" />
                    </button>
                </Link>
            </div>

        </section>
    );
}