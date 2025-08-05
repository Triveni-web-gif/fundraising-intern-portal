import React from 'react';
import { DivideIcon as LucideIcon, Lock } from 'lucide-react';

interface RewardCardProps {
  title: string;
  description: string;
  icon: typeof LucideIcon;
  unlocked: boolean;
  color: string;
}

const RewardCard: React.FC<RewardCardProps> = ({
  title,
  description,
  icon: Icon,
  unlocked,
  color
}) => {
  return (
    <div className={`p-4 rounded-xl border-2 transition-all ${
      unlocked 
        ? 'border-transparent bg-gradient-to-r from-white to-gray-50 shadow-sm hover:shadow-md transform hover:scale-105 duration-300' 
        : 'border-dashed border-gray-300 bg-gray-50/50'
    }`}>
      <div className="flex items-center space-x-3">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
          unlocked 
            ? `bg-gradient-to-r ${color} animate-pulse-slow` 
            : 'bg-gray-300'
        }`}>
          {unlocked ? (
            <Icon className="w-5 h-5 text-white" />
          ) : (
            <Lock className="w-5 h-5 text-gray-500" />
          )}
        </div>
        
        <div className="flex-1">
          <h3 className={`font-semibold ${
            unlocked ? 'text-gray-900' : 'text-gray-500'
          }`}>
            {title}
          </h3>
          <p className={`text-sm ${
            unlocked ? 'text-gray-600' : 'text-gray-400'
          }`}>
            {description}
          </p>
        </div>
        
        {unlocked && (
          <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center animate-bounce-gentle">
            <div className="w-3 h-3 bg-green-500 rounded-full"></div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RewardCard;