import React from 'react';
import { TrendingUp, Users, Gift, Copy, Star, Award, Target, Heart } from 'lucide-react';
import StatCard from '../components/StatCard';
import ProgressChart from '../components/ProgressChart';
import RewardCard from '../components/RewardCard';

interface DashboardProps {
  currentUser: any;
}

const Dashboard: React.FC<DashboardProps> = ({ currentUser }) => {
  const copyReferralCode = () => {
    navigator.clipboard.writeText(currentUser?.referralCode || '');
    // In a real app, you'd show a toast notification here
    alert('Referral code copied to clipboard!');
  };

  const monthlyData = [
    { month: 'Jan', amount: 2500 },
    { month: 'Feb', amount: 3200 },
    { month: 'Mar', amount: 2800 },
    { month: 'Apr', amount: 4100 },
    { month: 'May', amount: 3600 },
    { month: 'Jun', amount: 4500 },
  ];

  const rewards = [
    {
      title: 'First Donation',
      description: 'Raised your first $100',
      icon: Heart,
      unlocked: true,
      color: 'from-pink-500 to-pink-600'
    },
    {
      title: 'Team Player',
      description: 'Collaborated on 5 campaigns',
      icon: Users,
      unlocked: true,
      color: 'from-purple-500 to-purple-600'
    },
    {
      title: 'Rising Star',
      description: 'Top 10% of interns this month',
      icon: Star,
      unlocked: true,
      color: 'from-teal-500 to-teal-600'
    },
    {
      title: 'Goal Crusher',
      description: 'Reach $20,000 in donations',
      icon: Target,
      unlocked: false,
      color: 'from-orange-500 to-orange-600'
    },
    {
      title: 'Champion',
      description: 'Reach $50,000 in donations',
      icon: Award,
      unlocked: false,
      color: 'from-yellow-500 to-yellow-600'
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Welcome Header */}
      <div className="mb-8">
        <div className="animated-bg rounded-2xl p-8 text-white relative overflow-hidden animate-slide-in-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-12 -mb-12 animate-float-reverse"></div>
          <div className="absolute top-1/2 right-1/4 w-16 h-16 bg-white/5 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/4 right-1/3 w-12 h-12 bg-white/10 rounded-full animate-bounce-gentle"></div>
          
          <div className="relative z-10">
            <h1 className="text-3xl font-bold mb-2">
              Welcome back, {currentUser?.name || 'Sarah'}! 👋
            </h1>
            <p className="text-white/90 text-lg">
              You're making an incredible impact. Keep up the amazing work!
            </p>
          </div>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8 animate-slide-in-right">
        <StatCard
          title="Total Raised"
          value={`$${currentUser?.donationsRaised?.toLocaleString() || '15,750'}`}
          icon={TrendingUp}
          color="from-purple-500 to-purple-600"
          change="+12.5%"
          changeType="increase"
        />
        <StatCard
          title="Current Rank"
          value={`#${currentUser?.rank || '3'}`}
          icon={Award}
          color="from-pink-500 to-pink-600"
          change="↑2 positions"
          changeType="increase"
        />
        <StatCard
          title="Active Donors"
          value="127"
          icon={Users}
          color="from-teal-500 to-teal-600"
          change="+8 this week"
          changeType="increase"
        />
        <StatCard
          title="Achievements"
          value={`${currentUser?.achievements?.length || '3'}/10`}
          icon={Gift}
          color="from-orange-500 to-orange-600"
          change="60% complete"
          changeType="neutral"
        />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-2 space-y-8 animate-slide-in-left">
          {/* Progress Chart */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Fundraising Progress</h2>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span>Monthly Goal: $5,000</span>
              </div>
            </div>
            <ProgressChart data={monthlyData} />
          </div>

          {/* Referral Code */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Your Referral Code</h2>
            <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-pink-50 rounded-xl border border-purple-100">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center animate-bounce-gentle">
                  <Gift className="w-5 h-5 text-white" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">
                    {currentUser?.referralCode || 'sarah2025'}
                  </p>
                  <p className="text-sm text-gray-600">Share with potential donors</p>
                </div>
              </div>
              <button
                onClick={copyReferralCode}
                className="flex items-center space-x-2 px-4 py-2 bg-white border border-purple-200 rounded-lg hover:bg-purple-50 transition-all duration-300 transform hover:scale-105"
              >
                <Copy className="w-4 h-4 text-purple-600" />
                <span className="text-purple-600 font-medium">Copy</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Column - Rewards */}
        <div className="space-y-6 animate-slide-in-right">
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Achievements</h2>
            <div className="space-y-4">
              {rewards.map((reward, index) => (
                <RewardCard key={index} {...reward} />
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-purple-50 rounded-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center animate-pulse-slow">
                  <TrendingUp className="w-4 h-4 text-purple-600" />
                </div>
                <span className="font-medium text-gray-900">View Analytics</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-pink-50 rounded-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-pink-100 rounded-lg flex items-center justify-center animate-bounce-gentle">
                  <Users className="w-4 h-4 text-pink-600" />
                </div>
                <span className="font-medium text-gray-900">Manage Donors</span>
              </button>
              
              <button className="w-full flex items-center space-x-3 p-3 text-left hover:bg-teal-50 rounded-lg transition-all duration-300 transform hover:scale-105">
                <div className="w-8 h-8 bg-teal-100 rounded-lg flex items-center justify-center animate-float">
                  <Gift className="w-4 h-4 text-teal-600" />
                </div>
                <span className="font-medium text-gray-900">Create Campaign</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;