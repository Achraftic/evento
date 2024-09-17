'use client'
import { Input } from '@nextui-org/input';
import React, { use, useState } from 'react';
import { SearchIcon } from './icons';
import { useRouter } from 'next/navigation';
import { number, z } from 'zod';

const SearchForm = () => {
    const [searchText, setSearchText] = useState("");
    const [error, seterror] = useState("");
    const router = useRouter();
const valideInputShema=z.string().min(2,"can't be less than 1 caracter").max(200)

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const  input = valideInputShema.safeParse(searchText);
         console.log(input.error)
        if(!input.success){
            seterror(input.error.errors[0].message)  
            return 
        }
        const newserachtext=input.data
        if (!searchText)
            return;

        router.push(`events/${newserachtext}`)


    }



    return (
        <form onSubmit={handleSubmit}>

            <Input
                onChange={(e) => (setSearchText(e.target.value))}
                value={searchText}
                classNames={{

                    label: "text-black/50 dark:text-white/90",
                    input: [
                        "bg-transparent",
                        "text-black/90 dark:text-white/90 ",
                        "placeholder:text-default-700/50 dark:placeholder:text-white/60",

                    ],
                    innerWrapper: "bg-transparent",
                    inputWrapper: [

                        "shadow-xl",
                        "bg-default-200/50",
                        "w-full ",
                        "dark:bg-default/60",
                        "backdrop-blur-xl",
                        "backdrop-saturate-200",
                        "hover:bg-default-200/70",
                        "dark:hover:bg-default/70",
                        "group-data-[focus=true]:bg-default-200/50",
                        "dark:group-data-[focus=true]:bg-default/60",
                        "!cursor-text",
                    ],
                }}
                placeholder="Type to search..."
                radius="lg"

                startContent={
                    <SearchIcon className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
                }
                isRequired
                isClearable
            />
            <p className=' text-sm text-danger-500 block h-2 px-2 mb-1'> {error} </p>
        </form>
    );
}

export default SearchForm;
