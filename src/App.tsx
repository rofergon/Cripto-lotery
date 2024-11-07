import React, { useState, useEffect } from 'react';
import { Timer, User, Trophy, History, LogIn } from 'lucide-react';
import EmojiGrid from './components/EmojiGrid';
import CountdownTimer from './components/CountdownTimer';
import UserDashboard from './components/UserDashboard';
import { getTimeUntilNextDraw } from './utils/timeUtils';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showDashboard, setShowDashboard] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400">
      <nav className="bg-white/10 backdrop-blur-md border-b border-white/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Trophy className="w-8 h-8 text-yellow-300" />
              <span className="ml-2 text-2xl font-bold text-white">EmojiLotto</span>
            </div>
            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="flex items-center px-4 py-2 rounded-lg bg-white/20 hover:bg-white/30 transition-all text-white"
            >
              <LogIn className="w-4 h-4 mr-2" />
              {isLoggedIn ? 'Logout' : 'Login'}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            Daily Emoji Lottery
          </h1>
          <CountdownTimer />
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
              <h2 className="text-2xl font-semibold text-white mb-6">Today's Draw</h2>
              <EmojiGrid />
            </div>
          </div>

          {isLoggedIn && (
            <div className="lg:col-span-1">
              <UserDashboard />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;