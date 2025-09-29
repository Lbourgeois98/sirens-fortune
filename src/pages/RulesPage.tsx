import React from 'react';
import { Shield, AlertCircle, CheckCircle, Clock, Users, MessageCircle } from 'lucide-react';

export const RulesPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="relative mb-8">
              <Shield className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mx-auto" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              House Rules & Terms
            </h1>
            <p className="text-lg sm:text-xl text-cyan-200 mb-8">
              Fair play guidelines for all underwater explorers
            </p>
          </div>

          {/* Age Verification */}
          <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 border-2 border-red-400/30 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <AlertCircle className="w-8 h-8 text-red-400 flex-shrink-0" />
              <h2 className="text-xl font-bold text-red-400">Age Requirement</h2>
            </div>
            <p className="text-red-200 mb-4">
              You must be <strong>18 years or older</strong> to participate in Sirens Fortune. 
              By using our services, you confirm that you meet this age requirement and are 
              legally allowed to participate in online gaming in your jurisdiction.
            </p>
            <div className="bg-red-800/20 rounded-xl p-4">
              <p className="text-red-200 text-sm">
                <strong>Important:</strong> We may request age verification documents. 
                Underage accounts will be permanently banned without refund.
              </p>
            </div>
          </div>

          {/* Deposit Rules */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-400/30 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <CheckCircle className="w-8 h-8 text-green-400 flex-shrink-0" />
              <h2 className="text-xl font-bold text-green-400">Deposit Guidelines</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-green-300 font-medium mb-3">Accepted Deposits:</h4>
                <ul className="space-y-2 text-green-200 text-sm">
                  <li>• Cryptocurrency via Stripe on-ramp</li>
                  <li>• Credit cards (converted to crypto)</li>
                  <li>• Bank transfers (through Stripe)</li>
                  <li>• Digital wallets</li>
                </ul>
              </div>
              <div>
                <h4 className="text-green-300 font-medium mb-3">Deposit Limits:</h4>
                <ul className="space-y-2 text-green-200 text-sm">
                  <li>• Minimum: $10 USD</li>
                  <li>• Maximum: $500 USD per transaction</li>
                  <li>• No daily limits</li>
                  <li>• All deposits are final</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-green-800/20 rounded-xl p-4">
              <p className="text-green-200 text-sm">
                <strong>Bonus Terms:</strong> First deposit receives 50% bonus. Bonus funds are 
                credited instantly and can be used immediately for gameplay.
              </p>
            </div>
          </div>

          {/* Withdrawal Rules */}
          <div className="bg-gradient-to-br from-yellow-900/20 to-orange-900/20 border-2 border-yellow-400/30 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <h2 className="text-xl font-bold text-yellow-400">Withdrawal Policy</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <h4 className="text-yellow-300 font-medium mb-3">Withdrawal Requirements:</h4>
                <ul className="space-y-2 text-yellow-200 text-sm">
                  <li>• Minimum: 3x (deposit + bonus)</li>
                  <li>• Maximum: 8x deposit amount</li>
                  <li>• Must claim within 12 hours</li>
                  <li>• Account verification required</li>
                </ul>
              </div>
              <div>
                <h4 className="text-yellow-300 font-medium mb-3">Processing Time:</h4>
                <ul className="space-y-2 text-yellow-200 text-sm">
                  <li>• Review period: 24-48 hours</li>
                  <li>• Processing: 1-3 business days</li>
                  <li>• ID verification may be required</li>
                  <li>• All withdrawals via Facebook contact</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-yellow-800/20 rounded-xl p-4">
              <p className="text-yellow-200 text-sm">
                <strong>Important:</strong> Withdrawal requests must be made through our Facebook page. 
                We do not process withdrawal requests through any other channels.
              </p>
            </div>
          </div>

          {/* Fair Play Rules */}
          <div className="bg-gradient-to-br from-blue-900/20 to-purple-900/20 border-2 border-blue-400/30 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Users className="w-8 h-8 text-blue-400 flex-shrink-0" />
              <h2 className="text-xl font-bold text-blue-400">Fair Play & Prohibited Activities</h2>
            </div>
            <div className="space-y-4 text-blue-200">
              <div>
                <h4 className="text-blue-300 font-medium mb-2">Prohibited Actions:</h4>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Using bots or automated software</li>
                  <li>• Creating multiple accounts</li>
                  <li>• Collusion with other players</li>
                  <li>• Attempting to manipulate games</li>
                  <li>• Money laundering or fraudulent activity</li>
                  <li>• Sharing account credentials</li>
                </ul>
              </div>
              <div>
                <h4 className="text-blue-300 font-medium mb-2">Consequences:</h4>
                <ul className="space-y-1 text-sm ml-4">
                  <li>• Account suspension or termination</li>
                  <li>• Forfeiture of funds and bonuses</li>
                  <li>• Permanent ban from all services</li>
                  <li>• Reporting to relevant authorities if required</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Account Security */}
          <div className="bg-gradient-to-br from-purple-900/20 to-pink-900/20 border-2 border-purple-400/30 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-8 h-8 text-purple-400 flex-shrink-0" />
              <h2 className="text-xl font-bold text-purple-400">Account Security & Responsibility</h2>
            </div>
            <div className="space-y-4 text-purple-200 text-sm">
              <p>
                <strong>Your Responsibilities:</strong> You are responsible for maintaining the 
                confidentiality of your account information and for all activities under your account.
              </p>
              <p>
                <strong>Security Measures:</strong> We implement industry-standard security measures 
                to protect your account, but you must also take reasonable precautions.
              </p>
              <div className="bg-purple-800/20 rounded-xl p-4">
                <h4 className="text-purple-300 font-medium mb-2">Security Tips:</h4>
                <ul className="space-y-1">
                  <li>• Never share your account details</li>
                  <li>• Use secure internet connections</li>
                  <li>• Contact us immediately if you suspect unauthorized access</li>
                  <li>• Keep your Facebook account secure</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Dispute Resolution */}
          <div className="bg-gradient-to-br from-slate-800/90 to-cyan-900/90 rounded-3xl p-8 border-2 border-cyan-400/30 mb-8">
            <div className="flex items-center gap-4 mb-6">
              <MessageCircle className="w-8 h-8 text-cyan-400 flex-shrink-0" />
              <h2 className="text-xl font-bold text-cyan-400">Dispute Resolution & Support</h2>
            </div>
            <div className="space-y-4 text-cyan-200">
              <p>
                If you have any disputes, concerns, or questions about your account, gameplay, 
                or transactions, please contact us through our official Facebook page.
              </p>
              <div className="bg-cyan-800/20 rounded-xl p-4">
                <h4 className="text-cyan-300 font-medium mb-2">Contact Information:</h4>
                <ul className="space-y-2">
                  <li>• Facebook: @sirens2fortune</li>
                  <li>• Messenger: m.me/sirens2fortune</li>
                  <li>• Response time: 24-48 hours</li>
                </ul>
              </div>
              <p className="text-sm">
                We are committed to resolving all disputes fairly and promptly. Most issues 
                are resolved within 48 hours of initial contact.
              </p>
            </div>
          </div>

          {/* Terms Updates */}
          <div className="bg-gradient-to-r from-slate-700/50 to-slate-600/50 rounded-3xl p-6 border border-slate-400/30 text-center">
            <h3 className="text-lg font-bold text-slate-300 mb-3">Terms & Conditions Updates</h3>
            <p className="text-slate-400 text-sm mb-4">
              These terms may be updated periodically. Continued use of our services 
              constitutes acceptance of any changes.
            </p>
            <p className="text-slate-500 text-xs">
              Last updated: January 2025 • Sirens Fortune reserves all rights
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="https://m.me/sirens2fortune"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 transform hover:scale-105 shadow-xl"
            >
              <MessageCircle className="w-6 h-6" />
              Questions? Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};