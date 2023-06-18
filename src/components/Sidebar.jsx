/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {
  HiCalendar,
  HiPlay,
  HiMusicNote,
  HiMenu,
  HiHome,
} from 'react-icons/hi';
import { RiCloseLine } from 'react-icons/ri';

import { logo33 } from '../assets';

const links = [
  { name: 'Home', to: '/', icon: HiHome },
  { name: 'Now Playing', to: '/now-playing', icon: HiPlay },
  { name: 'Mix Shows', to: '/mix-shows', icon: HiMusicNote },
  { name: 'Schedule', to: '/schedule', icon: HiCalendar },
];

const NavLinks = ({ handleClick }) => (
  <div className="mt-10">
    {links.map((item) => (
      <NavLink
        key={item.name}
        to={item.to}
        className="flex flex-row justify-start items-center my-8 text-sm font-medium text-gray-400 hover:text-white"
        onClick={() => handleClick && handleClick()}
      >
        <item.icon className="w-6 h-6 mr-2" />
        {item.name}
      </NavLink>
    ))}
  </div>
);

const Sidebar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navigate = useNavigate();
  const routeChange = () => {
    const path = '/';
    navigate(path);
  };

  return (
    <>
      <div className="absolute block top-12 right-10 hover:cursor-pointer">
        {!menuOpen ? (
          <HiMenu
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMenuOpen(true)}
          />
        ) : (
          <RiCloseLine
            className="w-6 h-6 mr-2 text-white"
            onClick={() => setMenuOpen(false)}
          />
        )}
      </div>

      <div
        className={`absolute h-screen w-1/6 bg-[#191836] backdrop-blur-lg z-10 p-6 smooth-transition ${
          menuOpen ? 'left-0' : '-left-full'
        }`}
      >
        <img
          src={logo33}
          alt="logo"
          className="w-1/2 h-15 hover:cursor-pointer"
          onClick={routeChange}
        />
        <h2 className="flex flex-row justify-start my-0 font-bold text-slate-400">
          Amber Radio
        </h2>
        <NavLinks handleClick={() => setMenuOpen(false)} />
      </div>
    </>
  );
};

export default Sidebar;
