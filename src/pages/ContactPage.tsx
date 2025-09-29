import React from 'react';
import { Facebook, MessageCircle, Clock, Shield, Headphones, Mail } from 'lucide-react';

export const ContactPage: React.FC = () => {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="relative mb-8">
              <MessageCircle className="w-16 h-16 sm:w-20 sm:h-20 text-cyan-400 mx-auto animate-pulse" />
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-cyan-400 rounded-full animate-ping opacity-60"></div>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-teal-400 bg-clip-text text-transparent">
              Contact Our Crew
            </h1>
            <p className="text-lg sm:text-xl text-cyan-200 mb-8">
              Connect with our underwater support team for assistance with your treasure hunting adventure
            </p>
          </div>

          {/* Primary Contact Methods */}
          <div className="grid sm:grid-cols-2 gap-8 mb-12">
            <a
              href="https://m.me/sirens2fortune"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-blue-800/90 to-blue-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-blue-400/30 hover:border-blue-300/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-blue-400/20"
            >
              <div className="text-center">
                <MessageCircle className="w-16 h-16 text-blue-400 mx-auto mb-6 group-hover:animate-bounce" />
                <h2 className="text-2xl font-bold text-white mb-4">Facebook Messenger</h2>
                <p className="text-blue-200 mb-6">
                  Get instant support through our Facebook Messenger. Best for quick questions, 
                  account setup, and withdrawal requests.
                </p>
                <div className="bg-blue-700/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-blue-300">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">Usually responds within 1 hour</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-blue-600 to-blue-700 group-hover:from-blue-500 group-hover:to-blue-600 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center gap-2">
                  <MessageCircle className="w-5 h-5" />
                  Message Us Now
                </div>
              </div>
            </a>

            <a
              href="https://www.facebook.com/sirens2fortune/"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-gradient-to-br from-cyan-800/90 to-teal-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/30 hover:border-cyan-300/60 transition-all duration-500 transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-400/20"
            >
              <div className="text-center">
                <Facebook className="w-16 h-16 text-cyan-400 mx-auto mb-6 group-hover:animate-bounce" />
                <h2 className="text-2xl font-bold text-white mb-4">Facebook Page</h2>
                <p className="text-cyan-200 mb-6">
                  Visit our official Facebook page for updates, announcements, and community 
                  discussions with fellow treasure hunters.
                </p>
                <div className="bg-cyan-700/30 rounded-xl p-4 mb-6">
                  <div className="flex items-center justify-center gap-2 text-cyan-300">
                    <Shield className="w-4 h-4" />
                    <span className="text-sm">Official verified page</span>
                  </div>
                </div>
                <div className="bg-gradient-to-r from-cyan-600 to-teal-600 group-hover:from-cyan-500 group-hover:to-teal-500 text-white px-6 py-3 rounded-full font-bold transition-all duration-300 inline-flex items-center gap-2">
                  <Facebook className="w-5 h-5" />
                  Visit Our Page
                </div>
              </div>
            </a>
          </div>

          {/* Support Topics */}
          <div className="bg-gradient-to-br from-slate-800/90 to-purple-900/90 backdrop-blur-sm rounded-3xl p-8 sm:p-12 border-2 border-purple-400/30 mb-12">
            <div className="text-center mb-8">
              <Headphones className="w-12 h-12 text-purple-400 mx-auto mb-4" />
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4">
                What We Can Help With
              </h2>
              <p className="text-purple-200 text-lg">
                Our crew is ready to assist with all aspects of your underwater adventure
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Account Setup",
                  description: "Getting started with your Sirens Fortune account",
                  icon: <Shield className="w-6 h-6 text-green-400" />
                },
                {
                  title: "Deposit Issues",
                  description: "Problems with crypto deposits or Stripe payments",
                  icon: <MessageCircle className="w-6 h-6 text-blue-400" />
                },
                {
                  title: "Withdrawal Requests",
                  description: "Processing your treasure withdrawals",
                  icon: <Clock className="w-6 h-6 text-yellow-400" />
                },
                {
                  title: "Bonus Questions",
                  description: "Understanding your bonuses and rewards",
                  icon: <Mail className="w-6 h-6 text-purple-400" />
                },
                {
                  title: "Technical Support",
                  description: "Website issues or technical problems",
                  icon: <Headphones className="w-6 h-6 text-orange-400" />
                },
                {
                  title: "General Inquiries",
                  description: "Any other questions about our services",
                  icon: <Facebook className="w-6 h-6 text-cyan-400" />
                }
              ].map((item, index) => (
                <div key={index} className="bg-purple-800/20 rounded-xl p-6 border border-purple-400/20">
                  <div className="flex items-center gap-3 mb-3">
                    {item.icon}
                    <h4 className="font-bold text-white">{item.title}</h4>
                  </div>
                  <p className="text-purple-200 text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Response Times */}
          <div className="bg-gradient-to-br from-green-900/20 to-emerald-900/20 border-2 border-green-400/30 rounded-3xl p-8 mb-12">
            <div className="flex items-center gap-4 mb-6">
              <Clock className="w-8 h-8 text-green-400 flex-shrink-0" />
              <h2 className="text-xl font-bold text-green-400">Response Times & Availability</h2>
            </div>
            <div className="grid sm:grid-cols-2 gap-6 text-green-200">
              <div>
                <h4 className="text-green-300 font-medium mb-3">Facebook Messenger:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Peak hours: Within 1 hour</li>
                  <li>• Off-peak: Within 4 hours</li>
                  <li>• Complex issues: Within 24 hours</li>
                  <li>• Available 24/7</li>
                </ul>
              </div>
              <div>
                <h4 className="text-green-300 font-medium mb-3">Facebook Page:</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Comments: Within 6 hours</li>
                  <li>• Direct messages: Within 2 hours</li>
                  <li>• Posts: Daily updates</li>
                  <li>• Monitored continuously</li>
                </ul>
              </div>
            </div>
            <div className="mt-6 bg-green-800/20 rounded-xl p-4">
              <p className="text-green-200 text-sm">
                <strong>Priority Support:</strong> Withdrawal requests and account security 
                issues receive highest priority and are typically resolved within 1-2 hours.
              </p>
            </div>
          </div>

          {/* Important Notes */}
          <div className="bg-gradient-to-r from-yellow-900/20 to-orange-900/20 border-2 border-yellow-400/30 rounded-3xl p-8 mb-8">
            <div className="flex items-center gap-4 mb-4">
              <Shield className="w-8 h-8 text-yellow-400 flex-shrink-0" />
              <h2 className="text-xl font-bold text-yellow-400">Important Security Notes</h2>
            </div>
            <div className="space-y-4 text-yellow-200 text-sm">
              <p>
                <strong>Official Channels Only:</strong> We only provide support through our 
                official Facebook page and Messenger. Be wary of impersonators.
              </p>
              <p>
                <strong>Never Share Sensitive Info:</strong> We will never ask for your passwords, 
                private keys, or personal financial information through any channel.
              </p>
              <p>
                <strong>Verify Our Identity:</strong> Always ensure you're contacting 
                @sirens2fortune (verified page) before sharing any account information.
              </p>
            </div>
          </div>

          {/* FAQ Section */}
          <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-3xl p-8 border-2 border-slate-400/30 mb-8">
            <h2 className="text-xl font-bold text-slate-300 mb-6 text-center">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {[
                {
                  q: "How do I get started?",
                  a: "Message us on Facebook to set up your account, then make your first crypto deposit to receive a 50% bonus!"
                },
                {
                  q: "What's the minimum deposit?",
                  a: "The minimum deposit is $10 USD, which can be paid using crypto or credit card through Stripe."
                },
                {
                  q: "How do I withdraw my winnings?",
                  a: "Contact us through Facebook Messenger to request a withdrawal. Requirements apply (minimum 3x deposit+bonus)."
                },
                {
                  q: "Is my information secure?",
                  a: "Yes! We use Stripe's enterprise-grade security and never store your payment information."
                }
              ].map((item, index) => (
                <div key={index} className="bg-slate-700/30 rounded-xl p-4">
                  <h4 className="font-medium text-slate-300 mb-2">{item.q}</h4>
                  <p className="text-slate-400 text-sm">{item.a}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Final CTA */}
          <div className="text-center">
            <div className="bg-gradient-to-br from-slate-800/90 to-cyan-900/90 backdrop-blur-sm rounded-3xl p-8 border-2 border-cyan-400/30">
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
                Ready to Start Your Adventure?
              </h3>
              <p className="text-cyan-200 mb-6">
                Join thousands of treasure hunters in the depths of Sirens Fortune
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
