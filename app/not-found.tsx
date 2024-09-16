import React from 'react';
import { Button } from '@nextui-org/button';
import { LinkIcon } from '@nextui-org/link';
import Link from 'next/link';

import { title } from '@/components/primitives';




const NotFound = () => {
    return (
        <div className='flex flex-col gap-6 min-h-[60vh] justify-center items-center'>
            <h1 className={`${title()} text-center`}>  404 Not Found </h1>
            <Link className='flex space-x-3 items-center outline-white/50 hover:outline-white transition  outline p-2 rounded-lg text-sm'  href="/" >
            <LinkIcon /> Back to home
            </Link>
        </div>
    );
}

export default NotFound;
