import Link from 'next/link';
import { useParams } from 'next/navigation';
import React from 'react';

const NavLink = ({href, children}) => {
  const pathName=useParams()
  const isActive= href === pathName;
  return (
    <div>
      <Link href={href} className={`${isActive && 'bg-red-100 text-red-600'}`}>{children}</Link>
    </div>
  );
};

export default NavLink;