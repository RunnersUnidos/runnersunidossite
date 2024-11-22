'use client';
import React, { useState } from 'react';

const UserForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    email: '',
    about: '',
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    console.log(formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="font-sans max-w-md mx-auto space-y-4 p-4"
    >
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          First Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="lastName" className="block text-sm font-medium mb-1">
          Last Name
        </label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          required
        />
      </div>

      <div>
        <label htmlFor="about" className="block text-sm font-medium mb-1">
          About
        </label>
        <textarea
          id="about"
          name="about"
          value={formData.about}
          onChange={handleChange}
          className="w-full px-3 py-2 border rounded-md"
          rows={4}
          required
        />
      </div>

      <button
        type="submit"
        className="btn w-auto bg-transparent border-pink-500 hover:bg-pink-500 text-black"
      >
        Submit
      </button>
    </form>
  );
};

export default UserForm;
