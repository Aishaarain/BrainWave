import {brainwave} from '../assets'
import React from 'react'
import { useState } from "react";
import { navigation } from '../constants'
import { useLocation } from 'react-router-dom'
import Button from './Button'
import Menusvg from '../assets/svg/MenuSvg';
import {HamburgerMenu} from './design/header'
import { disablePageScroll,enablePageScroll } from 'scroll-lock';

const Header = () => {
  const [openNavigation, setOpenNavigation] = useState (false);
  const pathname=useLocation();

  const toggleNavigation=()=>{
    if(openNavigation){
      setOpenNavigation(false);
      disablePageScroll();
  }
else{
  setOpenNavigation(true);
  enablePageScroll();
}}
const handleClick=()=>{
  if(!openNavigation) return;

  enablePageScroll();
setOpenNavigation(false);
}

  return (<>
 
   <div className={` fixed top-0 z-50 left-0 w-full border-b border-n-6 lg:border-n-8 lg:backdrop-blur-sm 
     ${openNavigation? "bg-n-8" : "bg-n-8/90 backdrop-blur-sm "} `}>
<div className='flex items-center px-5 lg:px-7.5 xl:px-10 max-lg:py-4' >
  <a href="#hero" className='block w-[12rem] xl:mr-8 '> 
    <img src={brainwave} width={190} height={40} alt="brainwave" /></a>
    
    <nav className={` ${openNavigation? "flex" :"hidden"} fixed top-[5rem] left-0 right-0 bottom-0 bg-n-8 lg:static lg:flex lg:mx-auto lg:bg-transparent`}>
      <div className='relative z-2 flex flex-col items-center justify-center m-auto lg:flex-row '>
      {navigation.map((item)=>
    (
      <a href={item.url} key={item.id} onClick={handleClick} className={`block relative font-code text-2xl uppercase text-n-1  transition-colors hover:text-indigo-500  ${item.onlyMobile? 'lg:hidden': ''} px-6 py-6 md:py-8 lg:-mr-0.25 lg:text-xs lg:font-semibold  ${item.url===pathname.hash ? 'z-2 lg:text-n-1' : 'lg:text-zinc-500'} ld:leading-5 lg:hover:text-slate-50 xl:px-12 `}>
        {item.title}
      </a>
    ))}
    
      </div>
      <HamburgerMenu/>
    </nav>
    <a href="#signup" className=' hidden mr-8 font-code text-xs font-bold tracking-wider text-zinc-500 uppercase transition-colors hover:text-slate-50 lg:block'>
    New Account</a>
    <div className=' hidden lg:flex'><Button  href="#login">
      sign in
    </Button>
    </div>
    <div className='ml-auto lg:hidden '>
    <Button onClick={toggleNavigation} >
      <Menusvg openNavigation={openNavigation} />
    </Button>
    </div>

</div>
   </div>
   </>
  )
}

export default Header