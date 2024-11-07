import React from 'react';
import { X, CreditCard } from 'lucide-react';

interface PurchaseModalProps {
  isOpen: boolean;
  onClose: () => void;
  onPurchase: () => void;
  price: number;
}

function PurchaseModal({ isOpen, onClose, onPurchase, price }: PurchaseModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50">
      <div className="bg-white rounded-2xl p-6 max-w-md w-full mx-4 relative">
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-500 hover:text-gray-700"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="text-center mb-6">
          <CreditCard className="w-12 h-12 text-purple-500 mx-auto mb-4" />
          <h3 className="text-2xl font-bold text-gray-800">Purchase Ticket</h3>
          <p className="text-gray-600 mt-2">Try your luck in today's draw!</p>
        </div>

        <div className="bg-purple-50 rounded-xl p-4 mb-6">
          <div className="flex justify-between items-center">
            <span className="text-purple-700 font-medium">Price:</span>
            <span className="text-2xl font-bold text-purple-700">${price.toFixed(2)}</span>
          </div>
        </div>

        <div className="space-y-4">
          <button
            onClick={onPurchase}
            className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-semibold hover:opacity-90 transition-opacity"
          >
            Confirm Purchase
          </button>
          <button
            onClick={onClose}
            className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl font-semibold hover:bg-gray-200 transition-colors"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
}

export default PurchaseModal;