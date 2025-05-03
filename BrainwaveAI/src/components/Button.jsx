import React from 'react'
import ButtonSvg from "../assets/svg/ButtonSvg"
const Button=({className,href,onClick,children,px,white})=> {

  const classes=`font-code text-xs font-bold uppercase tracking-wider relative inline-flex items-center justify-center h-11 transition-colors hover:text-color-1 ${px || 'px-7'} ${white? 'text-n-8': 'text-n-1'} `;
  const spanclass=`relative z-10`;
 const Buttonrender=()=>(
  <button className={classes} onClick={onClick}  > 
    <span className={spanclass}>{children}</span>
    {ButtonSvg(white)}
  </button>
 )
const renderlink=()=>(
  <a href={href} className={classes}>
    <span className={spanclass}>{children}</span>
    {ButtonSvg(white)}
    
  </a>
);

 return href? renderlink(): Buttonrender();
};



export default Button;