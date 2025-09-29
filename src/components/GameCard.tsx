import React from 'react';
import { Star, ShoppingCart, Eye } from 'lucide-react';
import { Game } from '../types/Game';

interface GameCardProps {
  game: Game;
  onViewDetails: (game: Game) => void;
}

export const GameCard: React.FC<GameCardProps> = ({ game, onViewDetails }) => {
  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'adventure': return 'from-orange-600 to-red-600';
      case 'simulation': return 'from-green-600 to-teal-600';
      case 'action': return 'from-red-600 to-pink-600';
      case 'puzzle': return 'from-purple-600 to-blue-600';
      default: return 'from-gray-600 to-gray-700';
    }
  };

  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl overflow-hidden border-2 border-cyan-400/30 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20 group">
      <div className="relative overflow-hidden">
        <img 
          src={game.image} 
          alt={game.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r ${getCategoryColor(game.category)}`}>
          {game.category.toUpperCase()}
        </div>
        {game.originalPrice && (
          <div className="absolute top-4 right-4 bg-red-600 text-white px-2 py-1 rounded-full text-xs font-bold">
            SALE
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
          {game.title}
        </h3>
        
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-4 h-4 ${i < Math.floor(game.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
              />
            ))}
          </div>
          <span className="text-cyan-200 text-sm">({game.rating})</span>
        </div>
        
        <p className="text-cyan-200 text-sm mb-4 line-clamp-3">
          {game.description}
        </p>
        
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-bold text-green-400">${game.price}</span>
            {game.originalPrice && (
              <span className="text-lg text-gray-400 line-through">${game.originalPrice}</span>
            )}
          </div>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={() => onViewDetails(game)}
            className="flex-1 bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2 justify-center"
          >
            <Eye className="w-4 h-4" />
            View Details
          </button>
          <button className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-4 py-2 rounded-full font-medium transition-all duration-300 flex items-center gap-2">
            <ShoppingCart className="w-4 h-4" />
            Buy Now
          </button>
        </div>
      </div>
    </div>
  );
};