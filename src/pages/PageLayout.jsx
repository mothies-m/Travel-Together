import React, { useRef } from 'react'
import Navbar from '../Component/Navbar'
import DropDown from '../Component/DropDown'
import Home from '../Component/page-contents/Home';
import SecondPage from '../Component/page-contents/SecondPage';

export default function PageLayout() {
  const ref1 =useRef();
  const ref2 =useRef();
  const ref3 =useRef();
  const ref4 =useRef();

  const section = ['#page2', '#page3','#page4', '#page1']
  const sectionRef = [ref1, ref2,ref3, ref4]
  const sectionElement = [<Home/>, <SecondPage/>,<div>ref3</div>, <div>ref4</div>]
  
  const pageComponet = (index)=>{
    var temp = index;
    if(index === 3)temp=-1
    sectionRef[temp+1].current?.scrollIntoView();
    return sectionElement[index]
  }

  return (
    <div>
       {section.map((item,index)=>{
        return(
        <section key={item} className={`image-${index+1}`} ref={sectionRef[index]}>
          <Navbar />
          <DropDown onClick={()=>pageComponet(index)}/>
          {pageComponet(index)}
        </section>
        )
       })}
      </div> 
  )
}
