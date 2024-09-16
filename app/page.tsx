/* eslint-disable unused-imports/no-unused-imports */
/* eslint-disable import/order */

import { title, subtitle } from "@/components/primitives";
import {  SearchIcon } from "@/components/icons";
import { Input } from "@nextui-org/input";
import SearchForm from "@/components/SearchForm";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-10 max-w-3xl  m-auto   " >
      <div className="inline-block   text-center justify-center max-w-3xl ">
        <h1 className={title()}>Find&nbsp;</h1>
        <h1 className={title({ color: "violet" })}>Events&nbsp;</h1>

        <h1 className={title()}>
          around you
        </h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Explore Thousands of Events Happening Around You
        </h2>
      </div>



      <div className="mt-1  max-w-md w-full">
      <SearchForm/>
        <div className="flex w-full justify-center gap-2 text-gray-500 text-sm mt-2 capitalize ">
          <div><h1 className={`dark:text-gray-200 text-gray-500 `} >Popular :</h1></div>
        <div className="flex justify-center gap-2">
        <p>austin</p>
        <p>Newyork</p>
        </div>
     
        </div>
    
      </div>
    </section>
  );
}
