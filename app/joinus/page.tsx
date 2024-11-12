import React from 'react';
import UserForm from '../components/form';

const JoinUs = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-around">
      <h1 className="mb-5 text-5xl font-bold text-black">Run With Us!</h1>
      <ul className="text-2xl text-center">
        <li>Trinity Overlook Trail</li>
        <li> 📌 110 W Commerce Street</li>
      </ul>
      <UserForm />
    </div>
  );
};

export default JoinUs;
