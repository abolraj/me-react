import React from 'react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from '@tanstack/react-router';
import { Ghost, Home, Undo2 } from 'lucide-react';

export default function E404({

}) {
    const { t } = useTranslation();
    const navigate = useNavigate();

    return (
        <div className='fixed p-6 size-full sm:size-1/2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-center gap-2'>
            <div className='flex grow gap-2 text-primary text-8xl sm:text-[10rem] items-center justify-center'>
                <span>4</span>
                <Ghost className='size-20 sm:size-40 animate-pulse' />
                <span>4</span>
            </div>

            <div className='relative'>
                <p className='text-center text-4xl'>
                    {t('error.page_not_found')}
                </p>

                <div className='mt-2 flex gap-2 w-full mx-auto' dir='ltr'>
                    <button className='btn btn-circle' onClick={()=>navigate(-1)}>
                        <Undo2 className='h-full' />
                    </button>

                    <button className='btn btn-secondary rounded-full grow flex justify-start items-center' onClick={()=>navigate('/')}>
                        <Home className='h-full' />
                        <p className='text-lg grow pl-2 pr-4 leading-6'>
                            {t('error.go_home')}
                        </p>
                    </button>
                </div>

            </div>
        </div>
    );
}