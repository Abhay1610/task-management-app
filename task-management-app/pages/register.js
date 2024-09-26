// src/pages/register.js

import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link'; // Import Link from next/link
// import { register } from '../utils/auth'; // Import your register function

const Register = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(''); // Reset error state

    try {
      await register(email, password); // Call your register function
      router.push('/login'); // Redirect to login page after successful registration
    } catch (err) {
      setError(err.message); // Set error message if registration fails
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-96">
        <h1 className="text-2xl mb-4">Register</h1>
        {error && <p className="text-red-500 mb-4">{error}</p>}
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              className="border rounded w-full py-2 px-3"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div className="mb-4">
            <label className="block mb-1" htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              className="border rounded w-full py-2 px-3"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white py-2 px-4 rounded w-full hover:bg-blue-600"
          >
            Register
          </button>
        </form>
        <p className="mt-4 text-center">
          Already have an account? 
          <Link href="/login" className="text-blue-500">Login</Link> {/* Use Link for navigation */}
        </p>
      </div>
    </div>
  );
};

export default Register;
