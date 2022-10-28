import React,{useEffect, useState}  from 'react'
import Courses from '../components/courses/Courses'
import IlHero from '../components/ilHero/IlHero'
import Searchbar from '../components/searchbar/Searchbar'
import {FiChevronDown} from 'react-icons/fi'
import {BiSearch} from 'react-icons/bi'
import { Link } from 'react-router-dom'
import { queries } from '@testing-library/react'
import axios from 'axios'

function Innov8Learn() {
  


  const [records, setRecords] = useState([]);
  const [query, setQuery] = useState("");

  // useEffect(()=>{
  //   var myHeaders = new Headers();

  //   myHeaders.append("Access-Control-Allow-Origin", "*");
  //   myHeaders.append("Access-Control-Allow-Credentials", "true");
  //   myHeaders.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
   
  // myHeaders.append("Content-Type", "application/json");
  // myHeaders.append("api-key", "WFetxORZs7nvoexnW0iL08KgqXpdYmZiq4rqDw8OQID71a8dr1IpOoeplBRdTX2N");
  // myHeaders.append("Accept", "application/json");
  // myHeaders.append("Access-Control-Allow-Headers", "X-Requested-With,content-type,**Authorization**, api-key, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  
  
  // var raw = JSON.stringify({
  //   "dataSource": "Innov8Learn",
  //   "database": "Innov8Learn",
  //   "collection": "Courses"
  // });
  
  // var requestOptions = {
  //   method: 'POST',
  //   headers: myHeaders,
  //   body: raw,
  //   redirect: 'follow'
  // };
  
  // fetch("/app/data-vdakt/endpoint/data/v1/action/find", requestOptions)
  //   .then(response => response.text())
  //   .then(result => console.log(Object.keys(JSON.parse(result))) )
  //   .catch(error => console.log('error', error));
  
  
  // })

  

  // This method fetches the records from the database.
  useEffect(() => {
       var myHeaders = new Headers();

    myHeaders.append("Access-Control-Allow-Origin", "*");
    myHeaders.append("Access-Control-Allow-Credentials", "true");
    myHeaders.append("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
   
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("api-key", "WFetxORZs7nvoexnW0iL08KgqXpdYmZiq4rqDw8OQID71a8dr1IpOoeplBRdTX2N");
  myHeaders.append("Accept", "application/json");
  myHeaders.append("Access-Control-Allow-Headers", "X-Requested-With,content-type,**Authorization**, api-key, Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  
  
  var raw = JSON.stringify({
    "dataSource": "Innov8Learn",
    "database": "Innov8Learn",
    "collection": "Courses"
  });
  
  var requestOptions = {
    method: 'POST',
    headers: myHeaders,
    body: raw,
    redirect: 'follow'
  };
    async function getRecords() {
      const response = await fetch(`/app/data-vdakt/endpoint/data/v1/action/find`, requestOptions);
  
      if (!response.ok) {
        const message = `An error occurred: ${response.statusText}`;
        window.alert(message);
        return;
      }
  
      const records = await response.json();
      // console.log(records)
      // console.log(typeof(records.documents))
      setRecords(records.documents);
    }
  
    getRecords();
  })
  //   return;
  // }, [records.length]);
  
  // This method fetches the records from the database.
  // useEffect(() => {
  //   async function getRecords() {
  //     const response = await fetch(`http://localhost:28017/Courses/`);
  
  //     if (!response.ok) {
  //       const message = `An error occurred: ${response.statusText}`;
  //       window.alert(message);
  //       return;
  //     }
  
  //     const records = await response.json();
  //     setRecords(records);
  //   }
  
  //   getRecords();
  // })
  //   return;
  // }, [records.length]);
  
 
  //console.log(records.filter(course=>course.title.toLowerCase().includes('Program')))
  return (
    <div className=''>
        <IlHero/>
        <div className="wrapper mx-[10vw] mt-5">
          <form action="" className='text-center relative border border-emerald-900 rounded-lg'>
            <BiSearch className='absolute top-1/2 -translate-y-1/2 ml-4'></BiSearch>
            <input type='text' onChange={(e)=>setQuery(e.target.value)} placeholder='search available courses' className=' text-center rounded-lg p-2 px-4 placeholder:text-center placeholder:text-sm hover:outline-none focus:outline-none' />
          </form>
          <main className='flex flex-col lg:flex-row  w-full mt-5'>
            <aside className='bg-innov8Yellow flex flex-row justify-between flex-1 p-3 rounded-xl'>
              
                <button id="dropdownDefault" data-dropdown-toggle="dropdown" class="text-black font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button">Categories<svg class="ml-2 w-4 h-4" aria-hidden="true" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></button>

                <div id="dropdown" class="hidden z-10 w-44 bg-white rounded divide-y divide-gray-100 shadow dark:bg-gray-700" style={{position: "absolute", inset: "0px auto auto 0px", margin: "0px", transform: "translate(0px, 310px)"}} data-popper-reference-hidden="" data-popper-escaped="" data-popper-placement="bottom">
                    <ul class="py-1 text-sm text-gray-700 dark:text-gray-200" aria-labelledby="dropdownDefault">
                      <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Dashboard</a>
                      </li>
                      <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Settings</a>
                      </li>
                      <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Earnings</a>
                      </li>
                      <li>
                        <a href="#" class="block py-2 px-4 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white">Sign out</a>
                      </li>
                    </ul>
                </div>

            </aside>
            <section className=' flex-1 mt-4 lg:flex-grow'>
           
              {/* <div className='text-sm'>{recordList(query)}</div> */}
              {records.filter(course=>course.title.toLowerCase().includes(query)).map((record,index) => {
                    return (
                      <div className="w-fit lg:w-full bg-innov8LightGreen rounded-xl p-9 text-left mb-5">
                      <header className='text-left mb-4'>
                      <h1 className='text-left text-lg font-semibold mb-2'>
                      {record.title}
                      </h1>
                      <p className='text-left text-sm'>
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