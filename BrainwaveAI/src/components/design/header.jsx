import { background } from '../../assets';

export const Rings = () => {
  return (<>
    <div className='absolute top-1/2 left-1/2 w-[51.375rem] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
    <div className='absolute top-1/2 left-1/2 w-[36.125] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
    <div className='absolute top-1/2 left-1/2 w-[23.125] aspect-square border border-n-2/10 rounded-full -translate-x-1/2 -translate-y-1/2'></div>
    </>
  );
};

import React from 'react'

export const SideLines = () => {
  return (
    <>
    <div className="absolute top-0 left-5 w-0.25 h-full bg-n-6"></div>
    <div className="absolute top-0 right-5 w-0.25 h-full bg-n-6"></div>
  </>
  );
};



export const BackgroundCircles = () => {
  return (<>
    <div className="absolute top-[4.4rem] left-16 w-10 h-13 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
    <div className="absolute top-[12.6rem] right-16 w-12 h-12 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
    <div className="absolute top-[26.8rem] left-12 w-11 h-10 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    <div className="absolute top-[38.4rem] left-19 w-10 h-13 bg-gradient-to-b from-[#DD734F] to-[#1A1A32] rounded-full"></div>
    <div className="absolute top-[10.6rem] right-20 w-12 h-12 bg-gradient-to-b from-[#B9AEDF] to-[#1A1A32] rounded-full"></div>
    <div className="absolute top-[45.8rem] left-10 w-11 h-10 bg-gradient-to-b from-[#88E5BE] to-[#1A1A32] rounded-full"></div>
    </>)
}
export const HamburgerMenu = () => {
    return (
      <div className="absolute inset-0 pointer-events-none lg:hidden">
        <div className="absolute inset-0 opacity-[.03]">
          <img
            className="w-full h-full object-cover"
            src={background}
            width={688}
            height={953}
            alt="Background"
          />
        </div>
  
        <Rings />
  
        <SideLines />
  
        <BackgroundCircles />
      </div>
    );
  };
