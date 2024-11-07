import React from 'react';

const EMOJIS = ["🎮", "🎲", "🎯", "🎪", "🎨", "🎭", "🎪", "🎫", "🎰"];

function EmojiGrid() {
  return (
    <div className="grid grid-cols-3 gap-4">
      {EMOJIS.map((emoji, index) => (
        <div
          key={index}
          className="aspect-square bg-white/5 backdrop-blur-md rounded-xl flex items-center justify-center border border-white/10 hover:border-white/30 transition-all cursor-pointer"
        >
          <span className="text-4xl sm:text-6xl">{emoji}</span>
        </div>
      ))}
    </div>
  );
}

export default EmojiGrid;