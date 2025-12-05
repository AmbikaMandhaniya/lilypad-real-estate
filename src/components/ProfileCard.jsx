import React from 'react';
import { BarChart3, Target } from 'lucide-react';

const ProfileCard = ({ profile, collaborators }) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl p-6 relative overflow-hidden">
      {/* Header Background */}
      <div className="absolute top-0 right-0 w-full h-32 bg-gradient-to-br from-blue-400 to-blue-600 rounded-t-3xl">
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=400&fit=crop"
          alt="Building"
          className="w-full h-full object-cover opacity-50"
        />
      </div>
      
      <div className="relative pt-16">
        {/* Profile Image */}
        <img 
          src={profile.image}
          alt={profile.name}
          className="w-20 h-20 rounded-full border-4 border-white mb-3 object-cover"
        />
        <h3 className="text-xl font-bold">{profile.name}</h3>
        <p className="text-gray-600 mb-6">{profile.role}</p>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-purple-50 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-purple-200 rounded-xl flex items-center justify-center">
              <BarChart3 size={20} className="text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{profile.deals}</div>
              <div className="text-xs text-gray-600">Deals</div>
            </div>
          </div>
          <div className="bg-green-50 rounded-2xl p-4 flex items-center gap-3">
            <div className="w-10 h-10 bg-green-200 rounded-xl flex items-center justify-center">
              <Target size={20} className="text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold">{profile.match}</div>
              <div className="text-xs text-gray-600">Match</div>
            </div>
          </div>
        </div>

        {/* Financial Stats */}
        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <div className="text-3xl font-bold mb-1">$ {profile.borrowed.toLocaleString()}</div>
            <div className="text-gray-600 text-sm">Borrowed</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">
              $ {profile.paid.toLocaleString()} <span className="text-green-500 text-lg">{profile.paidPercent}%</span>
            </div>
            <div className="text-gray-600 text-sm">Paid</div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div>
            <div className="text-3xl font-bold mb-1">
              $ {profile.earned.toLocaleString()} <span className="text-green-500 text-lg">{profile.earnedPercent}%</span>
            </div>
            <div className="text-gray-600 text-sm">Earned</div>
          </div>
          <div>
            <div className="text-3xl font-bold mb-1">
              {profile.loanTerm} <span className="text-gray-400 text-lg">Months</span>
            </div>
            <div className="text-gray-600 text-sm">Loan Term</div>
          </div>
        </div>

        {/* Collaborators */}
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {collaborators.map((img, idx) => (
              <img 
                key={idx}
                src={img}
                alt={`Collaborator ${idx + 1}`}
                className="w-10 h-10 rounded-full border-2 border-white object-cover"
              />
            ))}
            <div className="w-10 h-10 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-sm font-semibold text-purple-600">
              +14
            </div>
          </div>
          <span className="text-gray-600 text-sm">19 Collaborators</span>
        </div>

        {/* Bottom Navigation */}
        <div className="flex justify-around mt-6 pt-6 border-t border-gray-200">
          <button className="p-2 text-purple-600">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z" />
            </svg>
          </button>
          <button className="p-2 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
            </svg>
          </button>
          <button className="p-2 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
            </svg>
          </button>
          <button className="p-2 text-gray-400">
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;