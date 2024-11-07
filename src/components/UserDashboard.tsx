import React, { useState } from 'react';
import { Trophy, Ticket, History } from 'lucide-react';
import PurchaseModal from './PurchaseModal';

interface TicketType {
  id: number;
  date: string;
  combination: string;
}

function UserDashboard() {
  const [tickets, setTickets] = useState<TicketType[]>([
    { id: 1, date: '2024-03-10', combination: '🎮🎲🎯' },
    { id: 2, date: '2024-03-09', combination: '🎪🎨🎭' },
  ]);
  const [showPurchaseModal, setShowPurchaseModal] = useState(false);

  const handlePurchase = () => {
    const newTicket = {
      id: tickets.length + 1,
      date: new Date().toISOString().split('T')[0],
      combination: '🎲🎮🎯', // In a real app, this would be randomly generated
    };

    setTickets([newTicket, ...tickets]);
    setShowPurchaseModal(false);
  };

  return (
    <>
      <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white/20">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-2xl font-semibold text-white">My Dashboard</h2>
          <div className="flex items-center space-x-2">
            <Trophy className="w-5 h-5 text-yellow-300" />
            <span className="text-white">3 Wins</span>
          </div>
        </div>

        <div className="space-y-4">
          <div className="bg-white/5 rounded-xl p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-white/80">Active Tickets</span>
              <Ticket className="w-5 h-5 text-green-400" />
            </div>
            {tickets.map(ticket => (
              <div 
                key={ticket.id} 
                className="bg-white/5 rounded-lg p-3 mb-2 animate-fade-in"
              >
                <div className="flex justify-between items-center">
                  <span className="text-white">{ticket.combination}</span>
                  <span className="text-white/60 text-sm">{ticket.date}</span>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => setShowPurchaseModal(true)}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Buy New Ticket
          </button>
        </div>

        <div className="mt-6">
          <div className="flex items-center space-x-2 mb-4">
            <History className="w-5 h-5 text-white" />
            <h3 className="text-lg font-medium text-white">Recent Activity</h3>
          </div>
          <div className="space-y-2">
            {tickets.slice(0, 3).map((ticket, i) => (
              <div key={i} className="bg-white/5 rounded-lg p-3">
                <div className="flex justify-between items-center">
                  <span className="text-white/80">Ticket Purchased</span>
                  <span className="text-white/60 text-sm">{ticket.date}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PurchaseModal
        isOpen={showPurchaseModal}
        onClose={() => setShowPurchaseModal(false)}
        onPurchase={handlePurchase}
        price={5.99}
      />
    </>
  );
}

export default UserDashboard;