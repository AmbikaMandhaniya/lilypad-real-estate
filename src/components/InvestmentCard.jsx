import React from 'react';
import { TrendingUp } from 'lucide-react';

const InvestmentCard = ({ investment, isFirst }) => {
  return (
    <div className={`${!isFirst ? 'mt-4 pt-4 border-t border-gray-200' : ''}`}>
      <div className="flex gap-4">
        <img 
          src={investment.image} 
          alt={investment.name}
          className="w-20 h-20 rounded-xl object-cover flex-shrink-0"
        />
        <div className="flex-1 min-w-0">
          <h4 className="font-bold text-lg mb-1 truncate">{investment.name}</h4>
          <p className="text-xs text-gray-600 mb-2">
            {investment.address}<br />{investment.location}
          </p>
          <div className="flex items-center gap-2 mb-2">
            <TrendingUp size={16} className="text-green-500" />
            <span className="text-green-600 font-semibold text-sm">{investment.yield} Yield</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
            <div 
              className="bg-gradient-to-r from-blue-500 to-purple-600 h-2 rounded-full transition-all duration-500" 
              style={{width: '70%'}}
            ></div>
          </div>
          <div className="grid grid-cols-3 gap-2 text-xs">
            <div>
              <div className="text-gray-500 mb-1">Committed</div>
              <div className="font-semibold text-gray-900">{investment.committed}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Distribution</div>
              <div className="font-semibold text-gray-900">{investment.distribution}</div>
            </div>
            <div>
              <div className="text-gray-500 mb-1">Contribution</div>
              <div className="font-semibold text-gray-900">{investment.contribution}</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvestmentCard;