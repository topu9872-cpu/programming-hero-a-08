'use client'
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const NavLink = ({href, children,className}) => {
  const pathName=usePathname()
  const isActive= href === pathName;
  return (
    <div>
      <Link href={href} className={` ${isActive && ' text-[#fa3d3b]'} ${className}`}>{children}</Link>
    </div>
  );
};

export default NavLink;