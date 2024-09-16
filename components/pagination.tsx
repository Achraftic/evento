import { Button } from '@nextui-org/button';
import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundBack, IoIosArrowRoundForward } from 'react-icons/io';


type PaginationProps = {
   
    nextPath: string,
    prevPath: string,
}
const Pagination = ({  nextPath, prevPath }: PaginationProps) => {
  
    return (
        <div className='w-full flex justify-between my-10 px-3'>
            <div>
                {prevPath && <Link href={prevPath}>
                    <Button   isDisabled color="secondary" variant="ghost" startContent={<IoIosArrowRoundBack size={24} />}>Prev</Button>
                </Link>}
            </div>

            <Link href={nextPath}>
                {nextPath &&
                    <Button isDisabled color="secondary" variant="ghost" endContent={<IoIosArrowRoundForward size={24} />}>Next</Button>

                }
            </Link>


        </div>
    );
}

export default Pagination;
