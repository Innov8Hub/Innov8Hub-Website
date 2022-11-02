import React,{useEffect, useState}  from 'react'
import Courses from '../components/courses/Courses'
import IlHero from '../components/ilHero/IlHero'
import Searchbar from '../components/searchbar/Searchbar'
import {FiChevronDown} from 'react-icons/fi'
import {BiSearch} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { queries } from '@testing-library/react'
import axios from 'axios'
import courses from '../courses.json' 

function Innov8Learn() {
  const records = courses.courses
  const [query, setQuery] = useState("");

 return (
    <div className=''>
        <IlHero/>
        <div className="wrapper mx-[10vw] mt-5">
          <form action="" className='text-center relative border border-emerald-900 rounded-lg'>
            <BiSearch className='absolute top-1/2 -translate-y-1/2 ml-4'></BiSearch>
            <input type='text' onChange={(e)=>setQuery(e.target.value)} placeholder='search available courses' className=' text-center rounded-lg p-2 px-4 placeholder:text-center placeholder:text-sm hover:outline-none focus:outline-none' />
          </form>
          <main className='flex flex-col lg:flex-row gap-0 lg:gap-10 w-full mt-5'>
            <aside className='bg-innov8Yellow flex flex-col justify-center p-3 rounded-xl md:justify-start'>
            <div class="flex justify-center">
  <div>
    <div class="dropdown relative">
      <button
        class="
          dropdown-toggle
          px-6
          py-2.5
          bg-blue-600
          text-white
          font-medium
          text-xs
          leading-tight
          uppercase
          rounded
          shadow-md
          hover:bg-blue-700 hover:shadow-lg
          focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0
          active:bg-blue-800 active:shadow-lg active:text-white
          transition
          duration-150
          ease-in-out
          flex
          items-center
          whitespace-nowrap
        "
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        Dropdown button
        <svg
          aria-hidden="true"
          focusable="false"
          data-prefix="fas"
          data-icon="caret-down"
          class="w-2 ml-2"
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 320 512"
        >
          <path
            fill="currentColor"
            d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"
          ></path>
        </svg>
      </button>
      <ul
        class="
          dropdown-menu
          min-w-max
          absolute
          hidden
          bg-white
          text-base
          z-50
          float-left
          py-2
          list-none
          text-left
          rounded-lg
          shadow-lg
          mt-1
          hidden
          m-0
          bg-clip-padding
          border-none
        "
        aria-labelledby="dropdownMenuButton1"
      >
        <li>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Action</a
          >
        </li>
        <li>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Another action</a
          >
        </li>
        <li>
          <a
            class="
              dropdown-item
              text-sm
              py-2
              px-4
              font-normal
              block
              w-full
              whitespace-nowrap
              bg-transparent
              text-gray-700
              hover:bg-gray-100
            "
            href="#"
            >Something else here</a
          >
        </li>
      </ul>
    </div>
  </div>
</div>
            </aside>
            <section className=' flex-1 mt-4 lg:flex-grow flex flex-col gap-10'>
           
              {records.filter(course=>course.title.toLowerCase().includes(query.toLocaleLowerCase())).map((record,index) => {
                    return (
                      <div className="w-fit lg:w-full bg-innov8LightGreen rounded-xl p-9 text-left ">
                      <header className='text-left mb-4'>
                      <h1 className='text-left text-lg font-semibold mb-2'>
                      {record.title}
                      </h1>
                      <p className='text-left text-sm lg:w-1/2'>
                        {window.innerWidth <= 800 ? record.desc.substring(0,80) : record.desc}
                        <span className=' md:hidden lg:hidden text-innov8Organge text-[.7rem]'>{`... Read More>>`}</span>
                      </p>
                      </header>
                      <div className="mods text-xs">
                        <p>
                          Modules<span> </span>
                          {record.format[0].modules}
                          <span> | </span>
                          Lessons<span> </span>
                          {record.format[0].lessons}
                        </p>
                      </div>
                    </div>
                    );
              })}
            </section>
          </main>
          
        </div>
    </div>
  )
}

export default Innov8Learn