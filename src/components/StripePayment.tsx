import React, { useState } from 'react';
import { X, Wallet, DollarSign, CreditCard, Shield } from 'lucide-react';

interface StripePaymentProps {
  type: 'deposit' | 'withdrawal';
  onClose: () => void;
}

export const StripePayment: React.FC<StripePaymentProps> = ({ type, onClose }) => {
  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  // Your live Stripe public key
  const STRIPE_PUBLIC_KEY = 'pk_live_51RyFQw3xHLWv8lmEAOHH59LVElWtham2vZdh5onQjjgthirQRut6PmKzSCYxc0w0upWSbzKJyLFJ9bdmnG122siA00D0Nnt7hO';

  const handleStripeOnRamp = async () => {
    if (!email) {
      setError('Please enter your email address');
      return;
    }

    if (!email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setIsLoading(true);
    setError('');

    try {
      // Call your existing backend
      const response = await fetch('https://stripe-onramp-backend.fly.dev/create-onramp-session', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!data.client_secret) {
        throw new Error('Failed to create payment session');
      }

      // Initialize Stripe with your live key
      const stripe = (window as any).Stripe(STRIPE_PUBLIC_KEY);
      
      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      // Initialize the crypto on-ramp with your existing setup
      const session = await stripe.initCryptoOnramp({
        clientSecret: data.client_secret,
        appearance: {
          theme: 'dark' // Changed to dark theme to match your site
        },
        onExit: () => {
          showBtcModal();
          onClose(); // Close the modal when exiting
        }
      });

      // Mount the session
      session.mount();
      onClose(); // Close our modal since Stripe will take over

    } catch (error: any) {
      console.error('Payment error:', error);
      setError(error.message || 'Payment initialization failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const showBtcModal = () => {
    const address = "bc1qYourBtcAddressHere"; // UPDATE THIS WITH YOUR REAL BTC ADDRESS
    
    // Create a simple modal for the BTC address
    const modal = document.createElement('div');
    modal.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: rgba(0,0,0,0.8);
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 10000;
    `;
    
    const content = document.createElement('div');
    content.style.cssText = `
      background: #1e293b;
      padding: 2rem;
      border-radius: 1rem;
      border: 2px solid #06b6d4;
      color: white;
      text-align: center;
      max-width: 400px;
    `;
    
    content.innerHTML = `
      <h3 style="color: #06b6d4; margin-bottom: 1rem;">Bitcoin Address</h3>
      <p style="word-break: break-all; margin-bottom: 1rem; padding: 1rem; background: #334155; border-radius: 0.5rem;">${address}</p>
      <p style="color: #94a3b8; margin-bottom: 1rem;">Please send BTC to the address above</p>
      <button onclick="this.closest('div').remove()" style="background: #06b6d4; color: white; border: none; padding: 0.5rem 1rem; border-radius: 0.5rem; cursor: pointer;">Close</button>
    `;
    
    modal.appendChild(content);
    document.body.appendChild(modal);
    
    // Remove modal when clicking outside
    modal.addEventListener('click', (e) => {
      if (e.target === modal) {
        modal.remove();
      }
    });
  };

  const handleWithdrawal = () => {
    // Redirect to Facebook for withdrawal requests
    window.open('https://m.me/sirens2fortune', '_blank');
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
      <div className="bg-gradient-to-br from-slate-800 to-teal-900 rounded-3xl p-6 sm:p-8 max-w-md w-full border-2 border-cyan-400/30 relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-cyan-200 hover:text-white transition-colors"
        >
          <X className="w-6 h-6" />
        </button>

        <div className="text-center mb-6">
          {type === 'deposit' ? (
            <Wallet className="w-12 h-12 text-green-400 mx-auto mb-4" />
          ) : (
            <DollarSign className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
          )}
          <h2 className="text-2xl font-bold text-white mb-2">
            {type === 'deposit' ? 'Crypto Deposit' : 'Request Withdrawal'}
          </h2>
          <p className="text-cyan-200 text-sm">
            {type === 'deposit' 
              ? 'Secure crypto deposit via Stripe' 
              : 'Message us on Facebook for withdrawals'
            }
          </p>
        </div>

        {type === 'deposit' ? (
          <div className="space-y-4">
            {error && (
              <div className="bg-red-900/20 border border-red-400/30 rounded-xl p-3 text-red-200 text-sm">
                {error}
              </div>
            )}

            <div>
              <label className="block text-cyan-200 text-sm font-medium mb-2">
                Email Address
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="your@email.com"
                className="w-full px-4 py-3 bg-slate-700/50 border border-cyan-400/30 rounded-xl text-white placeholder-cyan-300/50 focus:border-cyan-400 focus:outline-none transition-colors"
              />
              <p className="text-xs text-cyan-300 mt-1">Required for Stripe crypto on-ramp</p>
            </div>

            <div className="bg-green-900/20 border border-green-400/30 rounded-xl p-4">
              <h4 className="text-green-400 font-medium mb-2 flex items-center gap-2">
                <Shield className="w-4 h-4" />
                What You Get
              </h4>
              <ul className="text-green-200 text-sm space-y-1">
                <li>• 50% signup bonus on first deposit</li>
                <li>• Instant crypto purchase with Stripe</li>
                <li>• Multiple payment methods supported</li>
                <li>• Secure, regulated transaction</li>
              </ul>
            </div>

            <div className="bg-blue-900/20 border border-blue-400/30 rounded-xl p-4">
              <h4 className="text-blue-400 font-medium mb-2">How It Works</h4>
              <ol className="text-blue-200 text-sm space-y-1">
                <li>1. Enter your email and click Pay</li>
                <li>2. Stripe opens secure crypto purchase</li>
                <li>3. Choose your payment method</li>
                <li>4. Complete purchase and get bonus!</li>
              </ol>
            </div>

            <button
              onClick={handleStripeOnRamp}
              disabled={isLoading || !email}
              className="w-full bg-gradient-to-r from-green-600 to-green-700 hover:from-green-500 hover:to-green-600 disabled:from-gray-600 disabled:to-gray-700 text-white py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Starting Stripe...
                </>
              ) : (
                <>
                  <CreditCard className="w-5 h-5" />
                  Start Crypto Purchase
                </>
              )}
            </button>

            <div className="text-center">
              <p className="text-xs text-cyan-300">
                🔒 Powered by Stripe • Live Environment • Secure Payments
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-yellow-900/20 border border-yellow-400/30 rounded-xl p-4">
              <h4 className="text-yellow-400 font-medium mb-2">Withdrawal Requirements</h4>
              <ul className="text-yellow-200 text-sm space-y-1">
                <li>• Minimum: 3x deposit + bonus</li>
                <li>• Maximum: 8x deposit</li>
                <li>• Must claim within 12 hours</li>
                <li>• ID verification required</li>
              </ul>
            </div>

            <button
              onClick={handleWithdrawal}
              className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-500 hover:to-blue-600 text-white py-3 rounded-xl font-bold transition-all duration-300 flex items-center justify-center gap-2"
            >
              <DollarSign className="w-5 h-5" />
              Request Withdrawal via Facebook
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
