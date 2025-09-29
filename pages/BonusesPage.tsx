import React from 'react';
import { Crown, Star, Gift, Zap, Facebook, MessageCircle } from 'lucide-react';

export const BonusesPage: React.FC = () => {
  const bonuses = [
    {
      title: "Welcome Bonus",
      percentage: "50%",
      description: "Get 50% bonus on your first deposit",
      icon: <Crown className="w-8 h-8 text-yellow-400" />,
      color: "from-yellow-600 to-orange-600",
      features: ["Instant bonus credit", "Up to $250 bonus", "No wagering requirements"]
    },
    {
      title: "Daily Rewards",
      percentage: "25%",
      description: "Daily bonus for active players",
      icon: <Star className="w-8 h-8 text-blue-400" />,
      color: "from-blue-600 to-purple-600",
      features: ["Every 24 hours", "Stacks with other bonuses", "VIP members get extra"]
    },
    {
      title: "Loyalty Bonus",
      percentage: "100%",
      description: "Exclusive rewards for loyal sirens",
      icon: <Gift className="w-8 h-8 text-green-400" />,
      color: "from-green-600 to-teal-600",
      features: ["Monthly bonus", "Exclusive access", "Priority withdrawals"]
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="relative mb-8">
              <Crown className="w-16 h-16 sm:w-20 sm:h-20 text-yellow-400 mx-auto animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-yellow-400 rounded-full animate-ping opacity-60"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text text-transparent">
              Game Bundles & Deals
            </h1>
            <p className="text-lg sm:text-xl text-cyan-200 mb-8">
              Special offers and bundle deals on our aquatic game collection
            </p>
          </div>

          {/* Bonus Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {bonuses.map((bonus, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/30 hover:border-yellow-400/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
              >
                <div className="text-center mb-6">
                  <div className="mb-4">
                    {bonus.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">{bonus.title}</h3>
                  <div className={`text-4xl font-bold bg-gradient-to-r ${bonus.color} bg-clip-text text-transparent mb-4`}>
                    {bonus.percentage}
                  </div>
                  <p className="text-cyan-200 text-sm">{bonus.description}</p>
                </div>
                
                <div className="space-y-3">
                  {bonus.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3 text-sm text-cyan-300">
                      <Zap className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* How to Claim Section */}
          <div className="bg-gradient-to-br from-teal-900/90 to-blue-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-teal-400/30 mb-12">
            <div className="text-center mb-8">
              <Gift className="w-12 h-12 text-teal-400 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                How to Claim Your Bonuses
              </h2>
              <p className="text-teal-200 text-lg">
                Follow these simple steps to unlock your underwater treasures
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              {[
                { step: "1", title: "Connect", desc: "Message us on Facebook to set up your account", icon: <Facebook className="w-6 h-6" /> },
                { step: "2", title: "Deposit", desc: "Make your first crypto deposit via Stripe", icon: <Star className="w-6 h-6" /> },
                { step: "3", title: "Bonus", desc: "Receive instant 50% bonus credit", icon: <Gift className="w-6 h-6" /> },
                { step: "4", title: "Play", desc: "Start playing and winning!", icon: <Zap className="w-6 h-6" /> }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="bg-teal-600 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-white font-bold text-lg">
                    {item.step}
                  </div>
                  <div className="text-teal-400 mb-2">
                    {item.icon}
                  </div>
                  <h4 className="text-white font-medium mb-2">{item.title}</h4>
                  <p className="text-teal-200 text-sm">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* VIP Program */}
          <div className="bg-gradient-to-br from-purple-900/90 to-pink-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-purple-400/30 mb-12">
            <div className="text-center mb-8">
              <Crown className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                VIP Siren Status
              </h2>
              <p className="text-purple-200 text-lg mb-6">
                Exclusive benefits for our most valued underwater explorers
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "Priority customer support",
                "Higher bonus percentages",
                "Exclusive VIP tournaments",
                "Faster withdrawal processing",
                "Personal account manager",
                "Special event invitations"
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-3 text-purple-200">
                  <Star className="w-5 h-5 text-purple-400 flex-shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Section */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-slate-800/90 to-cyan-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/30">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Ready to Claim Your Bonuses?
              </h3>
              <p className="text-cyan-200 mb-6">
                Connect with us now and start your legendary journey with a 50% welcome bonus
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://m.me/sirens2fortune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-blue-400/30 flex items-center gap-3 justify-center"
                >
                  <MessageCircle className="w-6 h-6" />
                  Message Us Now
                </a>
                <a
                  href="https://www.facebook.com/sirens2fortune/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gradient-to-r from-cyan-600 to-teal-600 hover:from-cyan-500 hover:to-teal-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-cyan-400/30 flex items-center gap-3 justify-center"
                >
                  <Facebook className="w-6 h-6" />
                  Visit Facebook
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
