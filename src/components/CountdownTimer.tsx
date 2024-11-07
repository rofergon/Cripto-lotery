import React, { useState, useEffect } from 'react';
import { Timer } from 'lucide-react';

function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState({
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date();
      const tomorrow = new Date();
      tomorrow.setHours(24, 0, 0, 0);
      const difference = tomorrow.getTime() - now.getTime();

      setTimeLeft({
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      });
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="flex items-center justify-center space-x-4">
      <Timer className="w-6 h-6 text-yellow-300" />
      <div className="flex space-x-2 text-white">
        <TimeUnit value={timeLeft.hours} unit="hours" />
        <span className="text-2xl">:</span>
        <TimeUnit value={timeLeft.minutes} unit="minutes" />
        <span className="text-2xl">:</span>
        <TimeUnit value={timeLeft.seconds} unit="seconds" />
      </div>
    </div>
  );
}

function TimeUnit({ value, unit }: { value: number; unit: string }) {
  return (
    <div className="text-center">
      <div className="bg-white/10 backdrop-blur-md rounded-lg px-3 py-2">
        <span className="text-2xl font-mono">{value.toString().padStart(2, '0')}</span>
      </div>
      <div className="text-xs mt-1 text-white/80">{unit}</div>
    </div>
  );
}

export default CountdownTimer;