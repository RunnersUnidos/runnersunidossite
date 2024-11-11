import React from 'react';
import UserForm from '../components/form';

const JoinUs = () => {
  return (
    <div className="h-screen flex flex-col justify-center items-center">
      <h1 className="mb-5 text-5xl font-bold text-black">Form</h1>
      <UserForm />
    </div>
  );
};

export default JoinUs;
