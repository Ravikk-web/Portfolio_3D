import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';

const DynamicText = () => {
    const el = useRef(null);

    useEffect(() => {
        const typed = new Typed(el.current, {
            strings:['Developer.', '3D-Artist', 'Photog'],
            typeSpeed: 100,
            baxkSpeed: 100,
            loop: true,
        });

        return () => {
            typed.destroy();
          };
    }, []);
  return (
    <span className='text-[4rem] leading-[5rem] text-[#915eff] font-bold' ref={el}></span>
  )
}

export default DynamicText