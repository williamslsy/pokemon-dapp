import React from 'react';
import Logo from './logo';

import Link from 'next/link';
import ConnectButton from './connect-button';
import { MyProfile } from './user-profile';

function NavBar() {
  return (
    <>
      <header className="navbar_container">
        <div className="flex flex-col md:flex-row md:justify-center gap-x-2 items-center">
          <Logo />
        </div>

        <Link href="/" className="text-muted font-bold text-[28px] hidden md:block hover:shadow-lg hover:text-white/75 cursor-pointer">
          Pokemon List
        </Link>

        <div className="flex gap-x-2 items-center">
          <ConnectButton />
          <MyProfile />
        </div>
      </header>
      <div className="w-full text-center">
        <h1 className="text-muted px-3 font-bold text-[20px] block md:hidden text-center mt-4">Pokemon List</h1>
      </div>
    </>
  );
}

export default NavBar;
