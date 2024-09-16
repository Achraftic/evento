import { Spinner } from '@nextui-org/spinner';
import React from 'react';

const Loading = () => {
    return (
       <div className='w-full h-[75vh] flex justify-center items-center'>
           <Spinner color="secondary" size="lg" />
       </div>

    );
}

export default Loading;
