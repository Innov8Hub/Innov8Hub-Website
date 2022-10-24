import React from 'react'
import Courses from '../components/courses/Courses'
import IlHero from '../components/ilHero/IlHero'
import Searchbar from '../components/searchbar/Searchbar'

function Innov8Learn() {

  return (
    <div>
        <IlHero/>
        <Courses/>
        <div className="hello bg-red-500 p-10">hello</div>
    </div>
  )
}

export default Innov8Learn