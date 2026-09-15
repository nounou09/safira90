import React from 'react';

export default function Loading() {
  return (
    <div className="min-h-screen bg-[#121212] flex flex-col items-center justify-center relative">
      
      {/* حركة دائرية حول الكرة */}
      <div className="relative flex justify-center items-center">
        <div className="absolute animate-ping w-20 h-20 rounded-full bg-green-500/20"></div>
        <div className="absolute w-24 h-24 rounded-full border-t-4 border-green-500 animate-spin"></div>
        <div className="text-5xl z-10 animate-bounce">⚽</div>
      </div>
      
      {/* اسم الموقع بتأثير النبض */}
      <h1 className="mt-8 text-4xl font-bold text-green-400 tracking-widest animate-pulse">
        صافرة 90
      </h1>
      
      <p className="text-gray-500 text-sm mt-3 animate-pulse">
        جاري تجهيز البث المباشر...
      </p>

    </div>
  );
}