import React, { useState } from 'react';
import { Crown, Heart, Users, Target } from 'lucide-react';

interface LoginPageProps {
  onLogin: (userData: any) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate login with dummy data
    const userData = {
      id: 1,
      name: formData.name || 'Sarah Johnson',
      email: formData.email || 'sarah.johnson@example.com',
      referralCode: `${(formData.name || 'sarah').toLowerCase().replace(' ', '')}2025`,
      donationsRaised: 15750,
      rank: 3,
      achievements: ['First Donation', 'Team Player', 'Rising Star']
    };
    
    onLogin(userData);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Branding */}
      <div className="hidden lg:flex lg:w-1/2 animated-bg relative overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-20 w-16 h-16 bg-white/10 rounded-full animate-float"></div>
        <div className="absolute top-40 right-32 w-12 h-12 bg-white/15 rounded-full animate-float-reverse"></div>
        <div className="absolute bottom-32 left-16 w-20 h-20 bg-white/10 rounded-full animate-bounce-gentle"></div>
        <div className="absolute top-1/3 left-1/3 w-8 h-8 bg-white/20 rounded-full animate-pulse-slow"></div>
        <div className="absolute bottom-40 right-20 w-14 h-14 bg-white/10 rounded-full animate-float"></div>
        
        <div className="relative z-10 flex flex-col justify-center items-center p-12 text-white">
          <div className="flex items-center space-x-4 mb-8">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center animate-bounce-gentle">
              <Crown className="w-8 h-8 text-white" />
            </div>
            <div>
              <h1 className="text-4xl font-bold">SHE CAN</h1>
              <p className="text-xl text-white/90">Foundation</p>
            </div>
          </div>
          
          <div className="max-w-md text-center mb-12">
            <h2 className="text-2xl font-bold mb-4">Empowering Women Through Fundraising</h2>
            <p className="text-white/90 text-lg leading-relaxed">
              Join our mission to create opportunities, build communities, and transform lives. 
              Every donation you raise makes a difference.
            </p>
          </div>

          <div className="grid grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center">
              <Heart className="w-8 h-8 mb-2 animate-pulse-slow" />
              <span className="font-semibold">Impact</span>
            </div>
            <div className="flex flex-col items-center">
              <Users className="w-8 h-8 mb-2 animate-bounce-gentle" />
              <span className="font-semibold">Community</span>
            </div>
            <div className="flex flex-col items-center">
              <Target className="w-8 h-8 mb-2 animate-float" />
              <span className="font-semibold">Growth</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center space-x-3 mb-8">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center animate-bounce-gentle">
              <Crown className="w-6 h-6 text-white" />
            </div>
            <div>
              <h1 className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                SHE CAN
              </h1>
              <p className="text-sm text-gray-500">Foundation</p>
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-xl p-8 animate-slide-in-right">
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">
                {isLogin ? 'Welcome Back!' : 'Join Our Mission'}
              </h2>
              <p className="text-gray-600">
                {isLogin 
                  ? 'Sign in to your intern portal' 
                  : 'Create your fundraising account'
                }
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              {!isLogin && (
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your email"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-colors"
                  placeholder="Enter your password"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
              >
                {isLogin ? 'Sign In' : 'Create Account'}
              </button>
            </form>

            <div className="mt-6 text-center">
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-purple-600 hover:text-purple-700 font-medium"
              >
                {isLogin 
                  ? "Don't have an account? Sign up" 
                  : 'Already have an account? Sign in'
                }
              </button>
            </div>

            {/* Demo Note */}
            <div className="mt-6 p-4 bg-purple-50 rounded-lg">
              <p className="text-sm text-purple-700 text-center">
                <strong>Demo Mode:</strong> Click "Sign In" with any details to explore the portal
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;