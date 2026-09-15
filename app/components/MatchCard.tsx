import React from 'react';
import Link from 'next/link'; // أضفنا أداة الربط الخاصة بـ Next.js

interface MatchProps {
  id: string; // أضفنا رقم المباراة كمتطلب أساسي
  league: string;
  team1: string;
  team1Logo: string;
  team2: string;
  team2Logo: string;
  time: string;
  score: string;
  isLive: boolean;
}

export default function MatchCard({ id, league, team1, team1Logo, team2, team2Logo, time, score, isLive }: MatchProps) {
  return (
    // غلفنا البطاقة بالكامل برابط يوجه إلى صفحة المباراة المحددة
    <Link href={`/match/${id}`} className="block">
      <div className="bg-[#1e1e1e] p-6 rounded-2xl border border-gray-800 hover:border-green-500/50 hover:shadow-[0_0_15px_rgba(74,222,128,0.1)] transition-all shadow-lg relative overflow-hidden group cursor-pointer h-full">
        <div className="text-center mb-6">
          <span className="text-xs font-bold text-gray-400 bg-gray-800 px-3 py-1 rounded-full">
            🏆 {league}
          </span>
        </div>

        <div className="flex justify-between items-center">
          <div className="flex flex-col items-center space-y-2 w-1/3">
            <div className="w-16 h-16 bg-white rounded-full p-1 flex items-center justify-center overflow-hidden">
              <img src={team1Logo} alt={team1} className="w-12 h-12 object-contain" />
            </div>
            <span className="font-bold text-sm text-center text-white">{team1}</span>
          </div>

          <div className="flex flex-col items-center justify-center w-1/3">
            {isLive ? (
              <div className="flex flex-col items-center">
                <span className="flex items-center text-red-500 text-xs font-bold mb-2 animate-pulse">
                  <span className="w-2 h-2 bg-red-500 rounded-full ml-1"></span> مباشر
                </span>
                <span className="text-3xl font-black text-green-400 tracking-widest">{score}</span>
              </div>
            ) : (
              <div className="flex flex-col items-center">
                <span className="text-3xl font-black text-gray-300 mb-1">{score}</span>
                <span className="text-sm text-gray-400 bg-gray-800 px-2 py-1 rounded" dir="ltr">{time}</span>
              </div>
            )}
          </div>

          <div className="flex flex-col items-center space-y-2 w-1/3">
            <div className="w-16 h-16 bg-white rounded-full p-1 flex items-center justify-center overflow-hidden">
              <img src={team2Logo} alt={team2} className="w-12 h-12 object-contain" />
            </div>
            <span className="font-bold text-sm text-center text-white">{team2}</span>
          </div>
        </div>
      </div>
    </Link>
  );
}