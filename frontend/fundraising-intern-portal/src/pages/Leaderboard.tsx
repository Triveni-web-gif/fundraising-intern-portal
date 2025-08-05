import React from 'react';
import { Crown, Trophy, Medal, TrendingUp, Star } from 'lucide-react';

const Leaderboard: React.FC = () => {
  const leaderboardData = [
    {
      id: 1,
      name: 'Emma Rodriguez',
      donationsRaised: 28500,
      rank: 1,
      change: 'same',
      avatar: 'ER',
      achievements: 8,
      growth: '+15.2%'
    },
    {
      id: 2,
      name: 'Sophia Chen',
      donationsRaised: 24750,
      rank: 2,
      change: 'up',
      avatar: 'SC',
      achievements: 7,
      growth: '+22.8%'
    },
    {
      id: 3,
      name: 'Sarah Johnson',
      donationsRaised: 15750,
      rank: 3,
      change: 'up',
      avatar: 'SJ',
      achievements: 6,
      growth: '+18.5%',
      isCurrentUser: true
    },
    {
      id: 4,
      name: 'Maya Patel',
      donationsRaised: 19200,
      rank: 4,
      change: 'down',
      avatar: 'MP',
      achievements: 5,
      growth: '+8.3%'
    },
    {
      id: 5,
      name: 'Isabella Garcia',
      donationsRaised: 17800,
      rank: 5,
      change: 'up',
      avatar: 'IG',
      achievements: 6,
      growth: '+25.1%'
    },
    {
      id: 6,
      name: 'Zoe Williams',
      donationsRaised: 16400,
      rank: 6,
      change: 'down',
      avatar: 'ZW',
      achievements: 4,
      growth: '+12.7%'
    },
    {
      id: 7,
      name: 'Aria Thompson',
      donationsRaised: 14900,
      rank: 7,
      change: 'same',
      avatar: 'AT',
      achievements: 5,
      growth: '+19.4%'
    },
    {
      id: 8,
      name: 'Luna Martinez',
      donationsRaised: 13600,
      rank: 8,
      change: 'up',
      avatar: 'LM',
      achievements: 4,
      growth: '+14.8%'
    }
  ];

  const getRankIcon = (rank: number) => {
    switch (rank) {
      case 1:
        return <Crown className="w-6 h-6 text-yellow-500" />;
      case 2:
        return <Trophy className="w-6 h-6 text-gray-400" />;
      case 3:
        return <Medal className="w-6 h-6 text-amber-600" />;
      default:
        return <span className="text-lg font-bold text-gray-600">#{rank}</span>;
    }
  };

  const getChangeIndicator = (change: string) => {
    switch (change) {
      case 'up':
        return <div className="w-2 h-2 bg-green-500 rounded-full"></div>;
      case 'down':
        return <div className="w-2 h-2 bg-red-500 rounded-full"></div>;
      default:
        return <div className="w-2 h-2 bg-gray-400 rounded-full"></div>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="mb-8">
        <div className="animated-bg rounded-2xl p-8 text-white relative overflow-hidden animate-slide-in-left">
          <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 animate-float"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full -ml-16 -mb-16 animate-float-reverse"></div>
          <div className="absolute top-1/3 left-1/4 w-20 h-20 bg-white/5 rounded-full animate-pulse-slow"></div>
          <div className="absolute bottom-1/3 right-1/3 w-16 h-16 bg-white/10 rounded-full animate-bounce-gentle"></div>
          
          <div className="relative z-10 text-center">
            <div className="flex items-center justify-center mb-4">
              <div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-2xl flex items-center justify-center animate-rotate-slow">
                <Trophy className="w-8 h-8 text-white" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Fundraising Leaderboard</h1>
            <p className="text-white/90 text-lg">
              Celebrating our top performers this month
            </p>
          </div>
        </div>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 animate-slide-in-right">
        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-purple-600 rounded-xl flex items-center justify-center animate-bounce-gentle">
              <TrendingUp className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Total Raised</p>
              <p className="text-2xl font-bold text-gray-900">$156,850</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-xl flex items-center justify-center animate-pulse-slow">
              <Star className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">Active Interns</p>
              <p className="text-2xl font-bold text-gray-900">24</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 transform hover:scale-105">
          <div className="flex items-center space-x-4">
            <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-teal-600 rounded-xl flex items-center justify-center animate-float">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className="text-sm text-gray-600">This Month's Goal</p>
              <p className="text-2xl font-bold text-gray-900">$200K</p>
            </div>
          </div>
        </div>
      </div>

      {/* Leaderboard */}
      <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 animate-slide-in-left">
        <div className="p-6 border-b border-gray-100">
          <h2 className="text-xl font-bold text-gray-900">Monthly Rankings</h2>
          <p className="text-gray-600 mt-1">Updated in real-time</p>
        </div>

        <div className="divide-y divide-gray-100">
          {leaderboardData.map((intern) => (
            <div
              key={intern.id}
              className={`p-6 hover:bg-gray-50 transition-colors ${
                intern.isCurrentUser ? 'bg-purple-50 border-l-4 border-purple-500' : ''
              } transform hover:scale-[1.02] transition-all duration-300`}
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  {/* Rank */}
                  <div className="flex items-center space-x-2">
                    {getRankIcon(intern.rank)}
                    {getChangeIndicator(intern.change)}
                  </div>

                  {/* Avatar & Info */}
                  <div className="flex items-center space-x-4">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center text-white font-bold ${
                      intern.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                      intern.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                      intern.rank === 3 ? 'bg-gradient-to-r from-amber-500 to-amber-700' :
                      'bg-gradient-to-r from-purple-500 to-pink-500'
                    } ${intern.rank <= 3 ? 'animate-pulse-slow' : ''}`}>
                      {intern.avatar}
                    </div>
                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="font-semibold text-gray-900">
                          {intern.name}
                        </h3>
                        {intern.isCurrentUser && (
                          <span className="px-2 py-1 bg-purple-100 text-purple-700 text-xs font-medium rounded-full">
                            You
                          </span>
                        )}
                      </div>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <span>{intern.achievements} achievements</span>
                        <span className="text-green-600 font-medium">{intern.growth}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Amount */}
                <div className="text-right">
                  <p className="text-xl font-bold text-gray-900">
                    ${intern.donationsRaised.toLocaleString()}
                  </p>
                  <p className="text-sm text-gray-600">raised</p>
                </div>
              </div>

              {/* Progress bar for top 3 */}
              {intern.rank <= 3 && (
                <div className="mt-4">
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className={`h-2 rounded-full ${
                        intern.rank === 1 ? 'bg-gradient-to-r from-yellow-400 to-yellow-600' :
                        intern.rank === 2 ? 'bg-gradient-to-r from-gray-400 to-gray-600' :
                        'bg-gradient-to-r from-amber-500 to-amber-700'
                      }`}
                      style={{
                        width: `${(intern.donationsRaised / leaderboardData[0].donationsRaised) * 100}%`
                      }}
                    ></div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Motivational Message */}
      <div className="mt-8 bg-gradient-to-r from-teal-50 to-purple-50 rounded-2xl p-6 border border-teal-100 animate-slide-in-right hover:shadow-lg transition-all duration-300 transform hover:scale-[1.02]">
        <div className="text-center">
          <h3 className="text-lg font-bold text-gray-900 mb-2">
            🌟 Keep pushing forward!
          </h3>
          <p className="text-gray-700">
            Every donation counts towards our mission of empowering women. 
            You're making a real difference in the world!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;