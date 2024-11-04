import React from 'react';

const JoinUs = () => {
  return (
    <div className="h-screen flex justify-center items-center">
      <form className="w-1/2 bg-black text-white p-8 rounded-lg flex flex-col gap-4">
        <input type="text" placeholder="Name" />
        <input type="email" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default JoinUs;
