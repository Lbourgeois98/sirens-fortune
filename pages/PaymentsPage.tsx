import React from 'react';
import { Bitcoin, Shield, Wallet, DollarSign, CreditCard, Zap } from 'lucide-react';

interface PaymentsPageProps {
  onShowPayment: (type: 'deposit' | 'withdrawal') => void;
}

export const PaymentsPage: React.FC<PaymentsPageProps> = ({ onShowPayment }) => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <div className="relative mb-8">
              <Bitcoin className="w-16 h-16 sm:w-20 sm:h-20 text-orange-400 mx-auto animate-pulse" />
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-400 to-yellow-400 bg-clip-text text-transparent">
              Secure Crypto Payments
            </h1>
            <p className="text-lg sm:text-xl text-cyan-200 mb-8">
              Powered by Stripe's enterprise-grade crypto infrastructure
            </p>
          </div>
          
          {/* Main Payment Actions */}
          <div className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-yellow-400/30 mb-8">
            <div className="text-center">
              <div className="flex flex-col sm:flex-row gap-6 justify-center mb-8">
                <button
                  onClick={() => onShowPayment('deposit')}
                  className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-green-400/30 flex items-center gap-3 justify-center"
                >
                  <Bitcoin className="w-6 h-6" />
                  Crypto Deposit
                </button>
                <button
                  onClick={() => onShowPayment('withdrawal')}
                  className="bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-500 hover:to-yellow-600 text-white px-8 sm:px-12 py-4 sm:py-6 rounded-full font-bold text-lg sm:text-xl transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-yellow-400/30 flex items-center gap-3 justify-center"
                >
                  <DollarSign className="w-6 h-6" />
                  Request Withdrawal
                </button>
              </div>
            </div>

            {/* Supported Cryptocurrencies */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              <div className="bg-orange-900/20 border border-orange-400/30 rounded-xl p-4 text-center">
                <Bitcoin className="w-8 h-8 text-orange-400 mx-auto mb-2" />
                <span className="text-orange-200 text-sm font-medium">Bitcoin</span>
              </div>
              <div className="bg-blue-900/20 border border-blue-400/30 rounded-xl p-4 text-center">
                <Bitcoin className="w-8 h-8 text-blue-400 mx-auto mb-2" />
                <span className="text-blue-200 text-sm font-medium">Ethereum</span>
              </div>
              <div className="bg-purple-900/20 border border-purple-400/30 rounded-xl p-4 text-center">
                <CreditCard className="w-8 h-8 text-purple-400 mx-auto mb-2" />
                <span className="text-purple-200 text-sm font-medium">Credit Card</span>
              </div>
              <div className="bg-green-900/20 border border-green-400/30 rounded-xl p-4 text-center">
                <Shield className="w-8 h-8 text-green-400 mx-auto mb-2" />
                <span className="text-green-200 text-sm font-medium">Secure</span>
              </div>
            </div>

            {/* Payment Features */}
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="bg-green-900/20 border border-green-400/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-green-400 mb-4 flex items-center gap-2">
                  <Wallet className="w-6 h-6" />
                  Crypto Deposits
                </h3>
                <ul className="text-green-200 space-y-2">
                  <li>• Multiple cryptocurrencies supported</li>
                  <li>• Credit card to crypto conversion</li>
                  <li>• Instant processing via Stripe</li>
                  <li>• 50% signup bonus included</li>
                  <li>• Secure regulated transactions</li>
                </ul>
              </div>
              
              <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-xl p-6">
                <h3 className="text-lg font-bold text-yellow-400 mb-4 flex items-center gap-2">
                  <DollarSign className="w-6 h-6" />
                  Withdrawals
                </h3>
                <ul className="text-yellow-200 space-y-2">
                  <li>• Minimum: 3x deposit + bonus</li>
                  <li>• Maximum: 8x deposit amount</li>
                  <li>• 12-hour claim window</li>
                  <li>• Fast processing times</li>
                  <li>• Facebook verification required</li>
                </ul>
              </div>
            </div>

            {/* How It Works */}
            <div className="bg-gradient-to-r from-cyan-900/30 to-blue-900/30 rounded-xl p-6 border-2 border-cyan-400/30">
              <h3 className="text-xl font-bold text-cyan-400 mb-4 flex items-center gap-2">
                <Zap className="w-6 h-6" />
                How Crypto Deposits Work
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-cyan-200">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">1</div>
                    <p className="text-sm">Click "Crypto Deposit" and enter your email</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">2</div>
                    <p className="text-sm">Stripe opens secure crypto purchase interface</p>
                  </div>
                </div>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">3</div>
                    <p className="text-sm">Choose crypto or use credit card to buy crypto</p>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-cyan-400 rounded-full flex items-center justify-center text-slate-900 font-bold text-xs">4</div>
                    <p className="text-sm">Receive instant credit plus 50% bonus</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Security & Compliance */}
          <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/90 rounded-3xl p-8 border-2 border-purple-400/30 mb-8">
            <h3 className="text-xl font-bold text-purple-400 mb-4 flex items-center gap-2">
              <Shield className="w-6 h-6" />
              Enterprise Security & Compliance
            </h3>
            <div className="grid sm:grid-cols-2 gap-6 text-purple-200">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>PCI DSS Level 1 Certified</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>SOC 2 Type II Compliant</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>256-bit SSL Encryption</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Real-time Fraud Detection</span>
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Zero Payment Data Storage</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Regulatory Compliant Processing</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>24/7 Transaction Monitoring</span>
                </div>
                <div className="flex items-center gap-2">
                  <Shield className="w-4 h-4 text-purple-400" />
                  <span>Global Financial Infrastructure</span>
                </div>
              </div>
            </div>
          </div>

          {/* Support Section */}
          <div className="grid sm:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-slate-800/90 to-teal-900/90 rounded-3xl p-6 border-2 border-teal-400/30">
              <h3 className="text-lg font-bold text-teal-400 mb-4">Payment Support</h3>
              <div className="space-y-3 text-teal-200 text-sm">
                <p>• Need help with deposits? Message us on Facebook</p>
                <p>• Stripe support available 24/7 for payment issues</p>
                <p>• All transactions monitored for security</p>
                <p>• Bonus applied automatically after deposit</p>
              </div>
              <div className="mt-4">
                <a
                  href="https://m.me/sirens2fortune"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-lg font-medium transition-colors"
                >
                  Get Support
                </a>
              </div>
            </div>
            
            <div className="bg-gradient-to-br from-slate-800/90 to-blue-900/90 rounded-3xl p-6 border-2 border-blue-400/30">
              <h3 className="text-lg font-bold text-blue-400 mb-4">Why Choose Stripe?</h3>
              <div className="space-y-3 text-blue-200 text-sm">
                <p>• Trusted by millions of businesses worldwide</p>
                <p>• Regulated crypto on-ramp service</p>
                <p>• Multiple payment methods supported</p>
                <p>• Instant processing and confirmations</p>
              </div>
              <div className="mt-4">
                <div className="text-xs text-blue-300">
                  🔒 Your security is our top priority
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
