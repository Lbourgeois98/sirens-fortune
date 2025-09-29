import React, { useState } from 'react';
import { Search, Filter, Gamepad2 } from 'lucide-react';
import { GameCard } from '../components/GameCard';
import { GameModal } from '../components/GameModal';
import { games } from '../data/games';
import { Game } from '../types/Game';

export const ShopPage: React.FC = () => {
  const [selectedGame, setSelectedGame] = useState<Game | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { value: 'all', label: 'All Games' },
    { value: 'adventure', label: 'Adventure' },
    { value: 'simulation', label: 'Simulation' },
    { value: 'action', label: 'Action' },
    { value: 'puzzle', label: 'Puzzle' }
  ];

  const filteredGames = games.filter(game => {
    const matchesSearch = game.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         game.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || game.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="relative mb-8">
              <Gamepad2 className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mx-auto animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Aquatic Game Collection
            </h1>
            <p className="text-lg sm:text-xl text-cyan-200 mb-8">
              Dive into our treasure trove of underwater-themed video games
            </p>
          </div>

          {/* Search and Filter */}
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-6 border-2 border-cyan-400/30 mb-8">
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <input
                  type="text"
                  placeholder="Search games..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 bg-slate-700/50 border border-cyan-400/30 rounded-full text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 transition-colors"
                />
              </div>
              <div className="relative">
                <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-cyan-400 w-5 h-5" />
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="pl-12 pr-8 py-3 bg-slate-700/50 border border-cyan-400/30 rounded-full text-white focus:outline-none focus:border-cyan-400 transition-colors appearance-none cursor-pointer"
                >
                  {categories.map(category => (
                    <option key={category.value} value={category.value} className="bg-slate-800">
                      {category.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>

          {/* Games Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {filteredGames.map((game) => (
              <GameCard
                key={game.id}
                game={game}
                onViewDetails={setSelectedGame}
              />
            ))}
          </div>

          {filteredGames.length === 0 && (
            <div className="text-center py-12">
              <div className="text-6xl mb-4">🐠</div>
              <h3 className="text-xl font-bold text-white mb-2">No games found</h3>
              <p className="text-cyan-200">Try adjusting your search or filter criteria</p>
            </div>
          )}

          {/* Featured Section */}
          <div className="bg-gradient-to-br from-teal-900/90 to-blue-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-teal-400/30">
            <div className="text-center mb-8">
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                Why Choose Our Aquatic Games?
              </h2>
              <p className="text-teal-200 text-lg">
                Immerse yourself in the most captivating underwater gaming experiences
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "Stunning Graphics", desc: "Beautiful underwater environments", icon: "🎨" },
                { title: "Immersive Audio", desc: "Realistic ocean soundscapes", icon: "🎵" },
                { title: "Engaging Stories", desc: "Captivating underwater adventures", icon: "📖" },
                { title: "Regular Updates", desc: "New content and features", icon: "🔄" }
              ].map((feature, index) => (
                <div key={index} className="text-center bg-teal-800/20 rounded-xl p-6">
                  <div className="text-4xl mb-3">{feature.icon}</div>
                  <h4 className="text-white font-bold mb-2">{feature.title}</h4>
                  <p className="text-teal-200 text-sm">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <GameModal game={selectedGame} onClose={() => setSelectedGame(null)} />
    </div>
  );
};