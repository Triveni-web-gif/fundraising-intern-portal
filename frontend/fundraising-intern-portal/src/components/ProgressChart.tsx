import React from 'react';

interface ChartData {
  month: string;
  amount: number;
}

interface ProgressChartProps {
  data: ChartData[];
}

const ProgressChart: React.FC<ProgressChartProps> = ({ data }) => {
  const maxAmount = Math.max(...data.map(d => d.amount));
  const goal = 5000;

  return (
    <div className="space-y-4">
      {/* Chart */}
      <div className="flex items-end justify-between h-48 space-x-2">
        {data.map((item) => {
          const height = (item.amount / maxAmount) * 160;
          const isGoalMet = item.amount >= goal;
          
          return (
            <div key={item.month} className="flex flex-col items-center space-y-2 flex-1">
              <div className="relative w-full">
                <div
                  className={`w-full rounded-t-lg transition-all duration-500 ${
                    isGoalMet
                      ? 'bg-gradient-to-t from-teal-400 to-teal-600'
                      : 'bg-gradient-to-t from-purple-400 to-purple-600'
                  } hover:shadow-lg transform hover:scale-105 transition-all duration-300`}
                  style={{ height: `${height}px` }}
                >
                  {/* Goal line indicator */}
                  {goal <= maxAmount && (
                    <div
                      className="absolute left-0 right-0 border-t-2 border-dashed border-orange-400"
                      style={{
                        bottom: `${((goal / maxAmount) * height)}px`
                      }}
                    />
                  )}
                </div>
                
                {/* Amount label */}
                <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                  <span className="text-xs font-medium text-gray-700 bg-white px-2 py-1 rounded shadow-sm">
                    ${item.amount.toLocaleString()}
                  </span>
                </div>
              </div>
              
              <span className="text-sm font-medium text-gray-600">{item.month}</span>
            </div>
          );
        })}
      </div>

      {/* Legend */}
      <div className="flex items-center justify-center space-x-6 text-sm">
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-purple-400 to-purple-600 rounded"></div>
          <span className="text-gray-600">Monthly Raised</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-3 bg-gradient-to-r from-teal-400 to-teal-600 rounded"></div>
          <span className="text-gray-600">Goal Achieved</span>
        </div>
        <div className="flex items-center space-x-2">
          <div className="w-3 h-1 border-t-2 border-dashed border-orange-400"></div>
          <span className="text-gray-600">Monthly Goal</span>
        </div>
      </div>
    </div>
  );
};

export default ProgressChart;