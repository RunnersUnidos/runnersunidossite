import React from 'react';
import UserForm from '../../components/form';

export const metadata = {
  title: 'Join Us - Runners Unidos',
  description:
    'Become a part of the Runners Unidos community! Sign up and join our running family to stay active, connect with others, and participate in our events.',
};

const JoinUs = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-evenly">
      <UserForm />
    </div>
  );
};

export default JoinUs;
