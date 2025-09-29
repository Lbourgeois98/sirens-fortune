import React from 'react';
import { X, Star, ShoppingCart, Play, Image } from 'lucide-react';
import { Game } from '../types/Game';

interface GameModalProps {
  game: Game | null;
  onClose: () => void;
}

export const GameModal: React.FC<GameModalProps> = ({ game, onClose }) => {
  if (!game) return null;

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
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
      <div className="bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border-2 border-cyan-400/30">
        <div className="relative">
          <img 
            src={game.image} 
            alt={game.title}
            className="w-full h-64 sm:h-80 object-cover rounded-t-3xl"
          />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-black/50 hover:bg-black/70 text-white p-2 rounded-full transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <div className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-bold text-white bg-gradient-to-r ${getCategoryColor(game.category)}`}>
            {game.category.toUpperCase()}
          </div>
          {game.originalPrice && (
            <div className="absolute top-16 left-4 bg-red-600 text-white px-3 py-1 rounded-full text-sm font-bold">
              SALE
            </div>
          )}
        </div>
        
        <div className="p-8">
          <div className="flex flex-col lg:flex-row gap-8">
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-white mb-4">{game.title}</h2>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`w-5 h-5 ${i < Math.floor(game.rating) ? 'text-yellow-400 fill-current' : 'text-gray-400'}`} 
                    />
                  ))}
                </div>
                <span className="text-cyan-200">({game.rating}/5)</span>
              </div>
              
              <p className="text-cyan-200 text-lg mb-6 leading-relaxed">
                {game.description}
              </p>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Key Features</h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {game.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2 text-cyan-200">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="mb-6">
                <h3 className="text-xl font-bold text-white mb-3">Screenshots</h3>
                <div className="grid grid-cols-2 gap-4">
                  {game.screenshots.map((screenshot, index) => (
                    <div key={index} className="relative group">
                      <img 
                        src={screenshot} 
                        alt={`${game.title} screenshot ${index + 1}`}
                        className="w-full h-32 object-cover rounded-xl border-2 border-cyan-400/30 group-hover:border-cyan-400/60 transition-colors"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-xl flex items-center justify-center">
                        <Image className="w-8 h-8 text-white" />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="lg:w-80">
              <div className="bg-gradient-to-br from-slate-700/50 to-slate-800/50 rounded-2xl p-6 border border-cyan-400/30">
                <div className="text-center mb-6">
                  <div className="flex items-center justify-center gap-3 mb-4">
                    <span className="text-3xl font-bold text-green-400">${game.price}</span>
                    {game.originalPrice && (
                      <span className="text-xl text-gray-400 line-through">${game.originalPrice}</span>
                    )}
                  </div>
                  {game.originalPrice && (
                    <div className="text-sm text-green-400 font-medium">
                      Save ${(game.originalPrice - game.price).toFixed(2)}
                    </div>
                  )}
                </div>
                
                <div className="space-y-3">
                  <button className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-6 py-3 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-400/30 flex items-center gap-3 justify-center">
                    <ShoppingCart className="w-6 h-6" />
                    Buy Now
                  </button>
                  
                  <button className="w-full bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white px-6 py-3 rounded-full font-medium transition-all duration-300 flex items-center gap-3 justify-center">
                    <Play className="w-5 h-5" />
                    Add to Wishlist
                  </button>
                </div>
                
                <div className="mt-6 pt-6 border-t border-cyan-400/20">
                  <div className="space-y-2 text-sm text-cyan-200">
                    <div className="flex justify-between">
                      <span>Platform:</span>
                      <span className="text-white">PC, Mac, Linux</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Release Date:</span>
                      <span className="text-white">Available Now</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Developer:</span>
                      <span className="text-white">Sirens Studio</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};