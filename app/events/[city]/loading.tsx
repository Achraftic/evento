import Skeletonc from '@/components/skeletonc';
import React from 'react';

const Loading = () => {
    return (
        <div className='p-4 md:gap-5 gap-7 w-full min-h-72 mt-10 grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:grid-cols-4'>
            {Array.from({ length: 8 }).map((_, index) => (
                <Skeletonc key={index} />
            ))}
        </div>
    );
}

export default Loading;
