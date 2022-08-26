import {React, useRef, useState, useEffect} from 'react'
import Newsletter from '../newsletter/Newsletter'
import './dontMiss.css'
function DontMiss() {
  const imgStyle={
    width:"100%",height:"5rem"
}
const myRef = useRef();
    const [dmVisible,setDmVisible] = useState();
    useEffect(() => {
        const observer = new IntersectionObserver((entries)=>{
            const entry = entries[0];
            setDmVisible(entry.isIntersecting);
        });
        observer.observe(myRef.current)
    },[])
  return (
    
    
    <div ref={myRef} className="dm-wrapper">
      <div className="dm-content">
      <div className={`dm-bell-wrapper ${dmVisible ? "dm-bell-wrapper-hide" : ""}`} >
        <div className={`dm-bell ${dmVisible ? "dm-bell-hide" : ""}`} >
          <lord-icon
              src="https://cdn.lordicon.com/ndydpcaq.json"
              trigger="hover"
              style={imgStyle}>
          </lord-icon>
        </div>
      </div>
      <div className={`dm-text-wrapper ${dmVisible ? "dm-text-wrapper-hide" : ""}`} >
        Don’t miss<br />our hottest news!
        </div>
      <div className={`dm-form-wrapper ${dmVisible ? "dm-form-wrapper-hide" : ""}`} >
        <Newsletter/>
      </div>
      </div>
    </div>
  )
}

export default DontMiss
