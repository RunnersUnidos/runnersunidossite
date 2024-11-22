import React from 'react';
import UserForm from '../components/form';
// import Logo from '@/public/LOGOLONG.png';
// import Image from 'next/image';
const JoinUs = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-evenly">
      <h1 className="mb-5 text-5xl font-bold text-black">Run With Us!</h1>
      {/* <Image
        src={Logo.src}
        alt="Logo"
        width={200}
        height={100}
        className="rounded-lg object-cover"
        quality={100}
      /> */}
      <UserForm />
    </div>
  );
};

export default JoinUs;
