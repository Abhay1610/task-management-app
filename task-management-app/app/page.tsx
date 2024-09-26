// app/page.tsx

import React from 'react';
import Link from 'next/link'; // Import Link from next/link

const HomePage = () => {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-4">Welcome to Task Management App</h1>
      <p className="text-lg">This is a simple task management system.</p>
      <Link href="/login">  {/* Use Link for navigation */}
        <a className="mt-6 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
          Go to Login
        </a>
      </Link>
    </main>
  );
};

export default HomePage;
