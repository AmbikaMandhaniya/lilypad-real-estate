import React from 'react';
import InvestmentCard from './InvestmentCard';
import ProfileCard from './ProfileCard';

const Hero = () => {
  const investments = [
    {
      id: 1,
      name: 'Aurora',
      address: '164 S.carson court',
      location: 'newport news,VA 23601',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&h=300&fit=crop',
      yield: '+ 3,5%',
      committed: '$219,278',
      distribution: '$710,568',
      contribution: '$928,541'
    },
    {
      id: 2,
      name: 'Geminin Appartment',
      address: '164 S.carson court',
      location: 'newport news,VA 23601',
      image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=400&h=300&fit=crop',
      yield: '+ 3,5%',
      committed: '$105,555',
      distribution: '$473,685',
      contribution: '$948,355'
    },
    {
      id: 3,
      name: 'Genisis',
      address: '164 S.carson court',
      location: 'newport news,VA 23601',
      image: 'https://images.unsplash.com/photo-1480074568708-e7b720bb3f09?w=400&h=300&fit=crop',
      yield: '+ 3,5%',
      committed: '$169.43',
      distribution: '$854.08',
      contribution: '$275.43'
    }
  ];

  const profileData = {
    name: 'Julie Craig',
    role: 'Investor',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
    deals: 68,
    match: '80%',
    borrowed: 350000,
    paid: 184000,
    paidPercent: 62,
    earned: 166000,
    earnedPercent: 38,
    loanTerm: 12
  };

  const collaborators = [
    'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop',
    'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop'
  ];

  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
      <div className="grid lg:grid-cols-2 gap-12 items-start">
        {/* Left Content */}
        <div>
          <div className="flex items-center space-x-2 mb-6">
            <div className="w-8 h-0.5 bg-purple-600"></div>
            <span className="text-purple-600 font-medium">Welcome to H2</span>
          </div>
          
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
            Unprecedented<br />
            Era of <span className="text-purple-600">Real Estate</span><br />
            <span className="text-purple-600">Investing</span>
          </h1>
          
          <p className="text-gray-600 mb-8 text-lg leading-relaxed">
            Flexible yield options and personalized portfolios that are tailored to your objectives to maximize strategically and leverage professional real estate advisory
          </p>
          
          <button className="px-8 py-3 bg-purple-600 text-white rounded-full hover:bg-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
            Start Learning Now
          </button>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-12">
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">658+</div>
              <div className="text-gray-600 text-sm">Properties Registered</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">685+</div>
              <div className="text-gray-600 text-sm">Deals Created</div>
            </div>
            <div>
              <div className="text-3xl lg:text-4xl font-bold text-purple-600 mb-2">255+</div>
              <div className="text-gray-600 text-sm">Investors</div>
            </div>
          </div>
        </div>

        {/* Right Content - Investment Cards & Profile */}
        <div className="space-y-6">
          {/* Investment Cards */}
          <div className="bg-white rounded-3xl shadow-xl p-6">
            <h3 className="text-xl font-bold mb-6">Investments</h3>
            
            {investments.map((inv, idx) => (
              <InvestmentCard 
                key={inv.id} 
                investment={inv} 
                isFirst={idx === 0}
              />
            ))}
          </div>

          {/* Profile Card */}
          <ProfileCard profile={profileData} collaborators={collaborators} />
        </div>
      </div>
    </section>
  );
};

export default Hero;