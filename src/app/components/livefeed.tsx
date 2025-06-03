'use client';
import LogoTicker from "./logos";
import { useEffect, useState } from "react";
import AnimatedNumber from '../animations/AnimatedNumber'
import FadeAnimation from '../animations/FadeAnimation'
import { AnimatePresence } from 'framer-motion'
import { useTranslations,useLocale } from "next-intl";
import Image from "next/image";
import GlobalLogo from '@/public/GlobalRunDay.png'
interface MileEntry {
  id: string;
  name: string;
  miles: number;
  createdAt: string;
}

interface TotalMiles {
  totalMiles: number;
}

export default function LiveFeed() {
  const [entries, setEntries] = useState<MileEntry[]>([]);
  const [totalMiles, setTotalMiles] = useState<number>(0);
  const [newMiles, setNewMiles] = useState<number>(0);
  const [newName, setNewName] = useState<string>('');
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const t = useTranslations('RunDay');
  const locale = useLocale();

  const fetchMiles = async () => {
    const res = await fetch('/api/miles', {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    const data = await res.json();
    setEntries(data);
  };

  const fetchTotalMiles = async () => {
    const res = await fetch('/api/miles/total', {
      cache: 'no-store',
      headers: {
        'Cache-Control': 'no-cache',
      },
    });
    const data: TotalMiles = await res.json();
    setTotalMiles(data.totalMiles);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName || !newMiles) return;

    await fetch('/api/miles', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Cache-Control': 'no-cache',
      },
      body: JSON.stringify({ name: newName, miles: newMiles }),
    });

    setNewName('');
    setNewMiles(0);
    setIsFormSubmitted(true);
    window.scrollTo(0,0)
    await Promise.all([fetchMiles(), fetchTotalMiles()]);
  };

  useEffect(() => {
    fetchMiles();
    fetchTotalMiles();
    const interval = setInterval(() => {
      fetchMiles();
      fetchTotalMiles();
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="">
      {/* Total Miles Display */}
     
        <div className="flex justify-center flex-col items-center">
 
          <div className="flex justify-center items-center flex-col text-[12rem] font-bold text-black font-[Prospekt]">
            <LogoTicker/>
            <div className="flex flex-col items-center relative">
              <Image 
                src={GlobalLogo.src} 
                alt="logo" 
                width={500} 
                height={500} 
                className=" object-contain opacity-50" 
              />
              <div className="bg-gradient-to-b from-pink-400 to-pink-800 bg-clip-text text-transparent drop-shadow-[0_2px_2px_rgba(0,0,0,0.3)] absolute -bottom-[150px]">
                <AnimatedNumber value={totalMiles} />
              </div>
            </div>
          </div>
        </div>
    

      {/* Submit Miles Form */}
      {!isFormSubmitted && (
        <div className="bg-gradient-to-r from-orange-500 to-white rounded-xl p-6 shadow-lg mt-[6rem]">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">   {t('formtitle')}</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                value={newName}
                onChange={(e) => setNewName(e.target.value)}
                placeholder="Your Name"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
              <input
                type="number"
                value={newMiles || ''}
                onChange={(e) => setNewMiles(parseFloat(e.target.value))}
                placeholder="Miles"
                step="0.1"
                className="w-full px-4 py-2 border border-gray-300 rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-pink-600 text-white py-3 rounded-lg font-semibold hover:bg-pink-700 transition-colors"
            >
             {t('formbutton')}
            </button>
          </form>
        </div>
      )}
  <LogoTicker/>
      {/* Recent Runs */}
       <div className="bg-gradient-to-r from-orange-500 to-white rounded-xl p-6 shadow-lg ">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">{t('formview')}</h3>
        <div className="space-y-3 ">
          <AnimatePresence>
            {entries.map((entry, index) => (
              <FadeAnimation key={entry.id} delay={index * 0.1}>
                <div
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-full hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-blue-100 border rounded-full flex items-center justify-center ">
                      <span className="text-blue-600 font-semibold ">{entry.name[0]}</span>
                    </div>
                    <span className="font-medium text-gray-800">{entry.name}</span>
                  </div>
                  <div className="text-right">
                    <span className="text-lg font-bold text-blue-600">{entry.miles}</span>
                    <span className="text-gray-500 ml-1">miles</span>
                  </div>
                </div>
              </FadeAnimation>
            ))}
          </AnimatePresence>
        </div>
      </div> 
    </div>
  );
}
