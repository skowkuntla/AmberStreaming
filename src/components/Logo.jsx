/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React from 'react';
import { useNavigate } from 'react-router-dom';

import { logo33 } from '../assets';

const Logo = () => {
  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/';
    navigate(path);
  };
  return (
    <div className="p-2 absolute top-10 left-6">
      <img
        src={logo33}
        alt="logo"
        className="w-1/6 h-15 hover:cursor-pointer"
        onClick={routeChange}
      />
      <h2 className="flex flex-row justify-start my-0 font-bold text-slate-400">
        Amber Radio
      </h2>
    </div>
  );
};

export default Logo;
