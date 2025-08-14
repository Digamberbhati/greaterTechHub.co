"use client";

import { useState, useEffect } from 'react';
import { format } from 'date-fns';
import { enUS } from 'date-fns/locale';

export default function ClientHeader() {
  const [currentTime, setCurrentTime] = useState('');

  // Update current time
  useEffect(() => {
    const updateTime = () => {
      setCurrentTime(format(new Date(), 'hh:mm:ss a', { locale: enUS }));
    };
    updateTime();
    const timer = setInterval(updateTime, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center">
      <span className="text-sm font-mono text-white flex-shrink-0">{currentTime}</span>
    </div>
  );
}