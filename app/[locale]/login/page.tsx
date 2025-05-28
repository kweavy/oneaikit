// app/login/page.tsx
'use client';

import { useEffect } from 'react';

export default function LoginPage() {
  useEffect(() => {
    const timer = setTimeout(() => {
      window.location.href = 'https://app.oneaikit.com/login';
    }, 1500); // delay 1.5 detik untuk menampilkan loading sebentar

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex items-center justify-center h-screen flex-col">
      <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid mb-4" />
      <p className="text-lg font-medium text-gray-700">Redirecting to login...</p>
    </div>
  );
}
