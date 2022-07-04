import React from 'react';
import { useState } from 'react';
import { Gallery } from './models/Gallery';
import { RiArrowGoBackFill, RiArrowGoForwardLine } from 'react-icons/ri';
import { motion } from 'framer-motion';

function App() {
  const [selected, setSelected] = useState(0);
  const lGallery = Gallery.length;

  const transition = { type: 'spring', duration: 2 };

  return (
    <div className="relative h-screen bg-slate-300">
      <div className="relative overflow-hidden">
        <motion.img
          key={Gallery[selected].id}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={transition}
          src={Gallery[selected].img}
          alt={Gallery[selected].title}
          className="h-screen w-screen object-cover cursor-pointer opacity-50 hover:opacity-100 hover:cursor-pointer"
        />
        <div className="absolute top-80 left-0 right-0 bottom-50 ">
          <div className="flex flex-col justify-center items-center">
            <h3 className="text-[4rem] text-white font-semibold">
              {Gallery[selected].title}
            </h3>
            <h3
              className="text-black text-center text-xl font-medium w-[25rem] bg-slate-200 p-2 opacity-50"
              numberOfLines={3}
            >
              {Gallery[selected].description}
            </h3>
          </div>
        </div>
        <div className="absolute bottom-10 left-0 right-0 flex justify-center items-center">
          <div
            className="bg-white p-5 mx-10 rounded-md cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              selected === 0
                ? setSelected(lGallery - 1)
                : setSelected(selected - 1);
            }}
          >
            <RiArrowGoBackFill />
          </div>
          <div
            className="bg-white p-5 mx-10 rounded-md cursor-pointer hover:scale-110 transition-all"
            onClick={() => {
              selected === lGallery - 1
                ? setSelected(0)
                : setSelected(selected + 1);
            }}
          >
            <RiArrowGoForwardLine />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
